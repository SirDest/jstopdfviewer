import { Document, Page, Text, View } from "@react-pdf/renderer";

function App() {
  return <MyPdf />;
}

const MyPdf = () => {
  return (
    <Document>
      <Page size='a4'>
        <View>
          <Text>What is a Panda?</Text>
        </View>
      </Page>
    </Document>
  );
};

export default App;
