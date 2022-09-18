import socialUrls from 'data/contact.json'

export function getServerSideProps() {
  return {
    redirect: {
      destination: socialUrls.linkedin,
      permanent: false,
    },
  }
}

export default function LinkedinPage() {
  return null
}
