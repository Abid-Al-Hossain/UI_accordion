"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import Slider from "@/components/shared/input/Slider";
import Switch from "@/components/shared/input/Switch";
import type { AccordionState } from "../types";

type Props = { state: AccordionState; update: <K extends keyof AccordionState>(key: K, value: AccordionState[K]) => void };

export default function BehaviorSection({ state, update }: Props) {
  return (
    <div className="space-y-4">
      <SectionCard title="Open Mode" subtitle="Single or multi-panel expansion.">
        <Select label="Open mode" value={state.openMode} options={["single", "multiple", "manual", "controlled", "uncontrolled"]} onChange={(value) => update("openMode", value)} />
        <Switch label="Collapsible" checked={state.collapsible} onChange={(value) => update("collapsible", value)} />
      </SectionCard>
      <SectionCard title="Structure" subtitle="Heading level, trigger icon, and disabled items.">
        <Select label="Heading level" value={state.headingLevel} options={["h2", "h3", "h4", "h5", "h6"]} onChange={(value) => update("headingLevel", value)} />
        <Select label="Trigger icon" value={state.triggerIcon} options={["chevron", "plus"]} onChange={(value) => update("triggerIcon", value)} />
        <Slider label="Disabled items" value={state.disabledItems} min={0} max={5} step={1} onChange={(value) => update("disabledItems", value)} />
      </SectionCard>
      <SectionCard title="State" subtitle="Component-level disabled state.">
        <Switch label="Disabled" checked={state.disabled} onChange={(value) => update("disabled", value)} />
      </SectionCard>
    </div>
  );
}
