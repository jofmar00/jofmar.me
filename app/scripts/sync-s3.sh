#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$APP_DIR/../.env"
BUCKET="jofmar-me"

if [ -f "$ENV_FILE" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

if [ ! -d "$APP_DIR/dist" ]; then
  echo "No existe $APP_DIR/dist. Ejecuta 'npm run build' antes de sincronizar." >&2
  exit 1
fi

aws s3 sync "$APP_DIR/dist" "s3://$BUCKET" --delete --size-only
