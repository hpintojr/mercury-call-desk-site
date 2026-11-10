import type { FunnelConfig } from "./types";
import { mercuryWebinar } from "./mercury-webinar";

/** Every funnel in this site, keyed by id. Add new client funnels here. */
export const funnels: Record<string, FunnelConfig> = {
  [mercuryWebinar.id]: mercuryWebinar,
};

/** Funnel routes render their own minimal header/footer, so the site chrome hides on them. */
export const funnelRoutes: string[] = Object.values(funnels).map((f) => f.basePath);

export function getFunnel(id: string): FunnelConfig | undefined {
  return funnels[id];
}

export type { FunnelConfig } from "./types";
