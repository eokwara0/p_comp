import { PanelProp } from "./type";

const SidePanel: React.FC<PanelProp> = ({ data , className }: PanelProp) => {
  return (
    <>
      <section>
        <div className={className}>{...data.map((x) => <div>{x.icon}</div>)}</div>
      </section>
    </>
  );
};

export default SidePanel;
