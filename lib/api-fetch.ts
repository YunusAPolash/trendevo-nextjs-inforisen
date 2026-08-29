const DEFAULT_FETCH_TIMEOUT_MS = 5_000;

type ApiFetchInit = Omit<RequestInit, 'signal'> & {
  timeoutMs?: number;
  signal?: AbortSignal;
  next?: { revalidate?: number | false; tags?: string[] };
};

/**
 * fetch() with an AbortSignal timeout so hung APIs cannot block RSC forever.
 */
export async function apiFetch(
  input: string,
  init: ApiFetchInit = {},
): Promise<Response> {
  const { timeoutMs = DEFAULT_FETCH_TIMEOUT_MS, signal, ...rest } = init;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const onAbort = () => controller.abort();
  signal?.addEventListener('abort', onAbort);

  try {
    return await fetch(input, {
      ...rest,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
    signal?.removeEventListener('abort', onAbort);
  }
}
