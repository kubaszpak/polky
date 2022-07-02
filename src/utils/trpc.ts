import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@/backend/router/routes";

export const trpc = createReactQueryHooks<AppRouter>();
