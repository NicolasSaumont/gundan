import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "error"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}