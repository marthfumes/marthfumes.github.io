/* Marth Fumes — API config
   ------------------------------------------------------------------
   Empty string  = offline build: everything is saved in this browser.
   Worker URL    = cloud build: orders and products live in a real
                   database, shared by every visitor and device.

   Paste your Cloudflare Worker URL between the quotes, like:
     window.__MF_API_BASE__ = "https://marth-fumes-api.muzammilmehar2009.workers.dev";
   ------------------------------------------------------------------ */
window.__MF_API_BASE__ = "";
