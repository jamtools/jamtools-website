#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

HOST="${HOST:-0.0.0.0}"
PORT="${PORT:-5173}"

if command -v pnpm >/dev/null 2>&1; then
  PKG_MGR="pnpm"
elif command -v npm >/dev/null 2>&1; then
  PKG_MGR="npm"
else
  echo "Error: pnpm or npm is required." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  "$PKG_MGR" install
fi

echo "Starting Vite dev server on http://${HOST}:${PORT}"
echo "Tip: set VITE_OPEN=true to auto-open a browser."

# Run Vite directly to avoid argument forwarding quirks.
VITE_BIN="$ROOT_DIR/node_modules/.bin/vite"
if [ ! -x "$VITE_BIN" ]; then
  echo "Error: Vite binary not found at $VITE_BIN" >&2
  exit 1
fi

exec "$VITE_BIN" --host "$HOST" --port "$PORT" --strictPort
