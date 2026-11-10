import type { VideoConfig } from "@/funnels/types";

/** Turns a share link from a common host into an embeddable URL. Returns null for direct video files. */
function toEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}?rel=0&modestbranding=1`;
    if (host.endsWith("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v") ?? u.pathname.split("/").pop();
      return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
    }
    if (host === "vimeo.com") return `https://player.vimeo.com/video/${u.pathname.split("/").filter(Boolean)[0]}`;
    if (host === "loom.com" && u.pathname.startsWith("/share/")) return url.replace("/share/", "/embed/");
    if (/\.(mp4|webm|mov)$/i.test(u.pathname)) return null;
    return url; // player.vimeo.com, fast.wistia.net, loom embed, etc.
  } catch {
    return url;
  }
}

/**
 * 16:9 video slot. With no URL it renders the wireframe placeholder
 * (play button, title, and a dummy control bar) until the real video is ready.
 */
export default function VideoEmbed({ video, title }: { video: VideoConfig; title: string }) {
  const frame = "relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-[color-mix(in_srgb,var(--f-primary)_25%,transparent)] ring-1 ring-white/5";

  if (video.url) {
    const embed = toEmbed(video.url);
    return (
      <div className={frame}>
        {embed ? (
          <iframe src={embed} title={title} className="absolute inset-0 h-full w-full" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen />
        ) : (
          <video src={video.url} controls playsInline preload="metadata" className="absolute inset-0 h-full w-full bg-black" />
        )}
      </div>
    );
  }

  return (
    <div className={`${frame} flex items-center justify-center`} role="img" aria-label={`${video.placeholderNote}: ${video.placeholderTitle}`}>
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,color-mix(in_srgb,var(--f-primary)_18%,transparent),transparent_70%)]" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--f-primary)] text-[var(--f-on-primary)] shadow-lg sm:h-20 sm:w-20">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
        </span>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">[ {video.placeholderNote} ]</p>
        <p className="mt-1 text-sm font-semibold text-zinc-300 sm:text-base">[ {video.placeholderTitle} ]</p>
      </div>
      {/* Dummy control bar */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-[11px] text-zinc-400">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        <span>0:00</span>
        <span className="relative h-1 flex-1 rounded-full bg-zinc-700"><span className="absolute inset-y-0 left-0 w-0 rounded-full bg-[var(--f-primary)]" /></span>
        <span>{video.placeholderDuration}</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /></svg>
      </div>
    </div>
  );
}
