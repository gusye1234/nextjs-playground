import Page from './page'
export default async function Default() {
  return (
    /* @ts-expect-error Server Component */
    <Page/>
  )
}