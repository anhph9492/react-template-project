export const StrapiConvertGetAll = (res: any) => {
  try {
    return res.data.data.map((e: any) => ({ ...e.attributes, id: e.id }))
  } catch (_error) {
    return []
  }
}
