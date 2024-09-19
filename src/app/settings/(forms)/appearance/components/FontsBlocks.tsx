import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

const fontOptions = [
  { label: "Inter", value: "font-inter" },
  { label: "Poppins", value: "font-poppins" },
  { label: "Roboto", value: "font-roboto" },
  { label: "Montserrat", value: "font-montserrat" },
  { label: "Inconsolata", value: "font-inconsolata" },
  { label: "Sans Devanagari", value: "font-noto-sans" },
  { label: "Trio Devanagari", value: "font-trio" },
]

const RenderFonts = () => {
  const [config, setConfig] = useConfig();
  const Devnagari = fontOptions.filter((x) => x.value === 'font-noto-sans' || x.value === 'font-trio');
  const Other = fontOptions.filter(x => x.value !== 'font-noto-sans' && x.value !== 'font-trio');
  const filterOptions = config.lang === 'mr' || config.lang === 'hi' ? Devnagari : Other

  return (
    <div className="space-y-1.5">
      <div className="grid grid-cols-5 gap-2">
        {filterOptions.map((item) => {
          return (
            <Button
              variant={"outline"}
              size="sm"
              key={item.label}
              onClick={(e) => {
                e.preventDefault();
                setConfig({
                  ...config,
                  font: item.value,
                })
              }}
              className={cn(
                "w-full",
                config.font === item.value &&
                "border-2 border-primary"
              )}
            >
              {item.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default RenderFonts;