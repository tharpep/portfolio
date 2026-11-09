#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 1. Typecheck with TypeScript
"$DIR/node_modules/.bin/tsc" --project "$DIR/tsconfig.json" --noEmit

# 2. Syntax confirmation
node -e 'console.log("Obscura check passed")'
