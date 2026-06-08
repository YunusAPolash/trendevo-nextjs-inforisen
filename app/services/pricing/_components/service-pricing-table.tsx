import type { ServicePricingRow } from './services-pricing-data';

const TABLE_HEADER_BG =
  'linear-gradient(155.9deg, rgb(203, 126, 247) 4.77%, rgb(255, 155, 193) 39.51%, rgb(251, 120, 196) 74.24%)';

const VIEW_BTN_BG =
  'linear-gradient(99.09deg, rgb(209, 129, 255) 2.85%, rgb(255, 99, 190) 90.53%)';

export default function ServicePricingTable({
  rows,
}: {
  rows: ServicePricingRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-b-2xl bg-white shadow-[0px_2px_3px_rgba(0,0,0,0.1)]">
      <div className="min-w-[900px] lg:min-w-full">
        <div
          className="flex items-center justify-between rounded-t-xl px-3.5 py-4"
          style={{ backgroundImage: TABLE_HEADER_BG }}
        >
          <div className="flex items-center gap-[18px]">
            <div className="w-[90px] px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              ID
            </div>
            <div className="w-[200px] px-2.5 py-1.5 text-base font-medium leading-normal text-white lg:w-[560px]">
              Services
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              Per rate 1000
            </div>
            <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              Min Order
            </div>
            <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              Max Order
            </div>
            <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              Average time
            </div>
            <div className="w-[126px] px-2.5 py-1.5 text-base font-medium leading-normal text-white">
              Description
            </div>
          </div>
        </div>

        <div className="rounded-b-2xl">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className={
                index < rows.length - 1
                  ? 'flex items-center justify-between border-b border-dashed border-[#c1c4cc] px-3.5 py-4'
                  : 'flex items-center justify-between px-3.5 py-4'
              }
            >
              <div className="flex items-center gap-[18px]">
                <div className="w-[90px] px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f]">
                  01
                </div>
                <div className="w-[200px] truncate px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f] lg:w-[560px]">
                  {row.serviceName}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f]">
                  {row.ratePer1000}
                </div>
                <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f]">
                  {row.minOrder}
                </div>
                <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f]">
                  {row.maxOrder}
                </div>
                <div className="flex-1 px-2.5 py-1.5 text-base font-medium leading-normal text-[#0c070f]">
                  {row.averageTime}
                </div>
                <div className="w-[126px] px-2.5 py-1.5">
                  <button
                    type="button"
                    className="flex h-10 w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium leading-normal text-white"
                    style={{ backgroundImage: VIEW_BTN_BG }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
