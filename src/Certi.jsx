import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import bg from "./images/Certficate.jpg";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  date: {
    fontSize: 10,
    fontWeight: "semibold",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    fontWeight: "semibold",
  },
  certificateTitle: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  footer: {
    fontSize: 9,
    fontWeight: "semibold",
    textAlign: "right",
  },
  link: {
    color: "blue",
  },
  absolute: {
    position: "absolute",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

// Create Document Component
const MyDocument = ({ date, name, certification }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Image src={bg} style={styles.bgImage} />
      <View style={[styles.section, styles.absolute, { top: 28, left: 11 }]}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>has successfully completed</Text>
        <Text style={styles.certificateTitle}>{certification}</Text>
        <Text style={styles.description}>
          a customer service certification that offers a real world environment
          to hone your skills.
        </Text>
      </View>
      <View
        style={[styles.section, styles.absolute, { bottom: 10, right: 16 }]}
      >
        <Text style={styles.footer}>Verified at:</Text>
        <Text style={[styles.footer, styles.link]}>
          http://training.outcess.com/verify/1234566
        </Text>
        <Text style={styles.footer}>
          Outcess has confirmed the identity of this individual and has
        </Text>
        <Text style={styles.footer}>participated in the course</Text>
      </View>
    </Page>
  </Document>
);

const Certi = () => {
  const todayDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = todayDate.getDate();
  const month = months[todayDate.getMonth()];
  const year = todayDate.getFullYear();

  const date = `${month} ${day}, ${year}`;
  const name = "Godwin, Odira Frontend";
  const certification = "Customer Service Professional Certification";

  return (
    <div className='w-full h-fit flex flex-col'>
      <PDFDownloadLink
        document={
          <MyDocument date={date} name={name} certification={certification} />
        }
        fileName='certificate.pdf'
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Certificate"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Certi;
