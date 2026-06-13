/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: { email: string; name: string | null };
    client?: { id: string; name: string; slug: string; git_path: string } | null;
  }
}
