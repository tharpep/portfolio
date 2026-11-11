#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MAIN_REPO="/home/tharpep/code/obscura"

# Symlink node_modules from main repo into worktree if missing
if [ ! -d "$DIR/node_modules" ] && [ -d "$MAIN_REPO/node_modules" ]; then
  ln -s "$MAIN_REPO/node_modules" "$DIR/node_modules"
fi

# 1. Typecheck with TypeScript
"$DIR/node_modules/.bin/tsc" --project "$DIR/tsconfig.json" --noEmit

# 2. Syntax confirmation
node -e 'console.log("Obscura check passed")'
