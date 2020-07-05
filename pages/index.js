import Page from '../components/Page'

export default function Home() {
  return (
    <Page>
      <img src="/propic.png" alt="my image" id="propic"/>
      
      <style jsx>{`
#propic {
    border-radius: 8px;
    padding: 5px;
    width: 150px;
} 

#nav {
background: lightgray; }

@media (max-width: 600px) { 
    
div {
background: gray; }

}
`}</style>

    </Page>
  )
}
