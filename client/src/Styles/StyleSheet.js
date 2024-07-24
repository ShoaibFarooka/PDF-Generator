import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  document: {
  },
  page: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  bar: {
    borderBottom: '2 solid #59315F', // Add a horizontal line
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image1: {
    maxHeight: '80px',
    maxWidth: '150px',
    marginBottom: '12px',
    marginLeft: '10px',
  },
  image2: {
    maxHeight: '80px',
    maxWidth: '150px',
    marginBottom: '12px',
    marginRight: '10px',
  },
  heading1: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
    color: 'red',
    textAlign: 'center'
  },
  heading2: {
    fontSize: 25,
    marginBottom: 20,
    color: 'rebeccapurple',
    textAlign: 'center'
  },
  heading3: {
    fontSize: 15,
    marginBottom: 100,
    color: 'rebeccapurple',
    textAlign: 'center'
  },

  // Table 1
  t1table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "purple",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  t1tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t1tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "purple",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t1tableCell: {
    paddingBottom: 6,
    margin: "auto",
    marginTop: 5,
    fontSize: 10
  },

  // Table 2
  t2table: {
    display: "table",
    width: "auto",
    border: 'none',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 30,
  },
  t2tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t2tableCol1: {
    width: "21%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableCol2: {
    width: "79%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableRow6Col1: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableRow6Col2: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableRow6Col3: {
    width: "12.5%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableRow6Col4: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableRow6Col5: {
    width: "12.5%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },

  t2tableRow6Col6: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t2tableCell: {
    padding: '5px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10
  },

  // Table 3
  t3table: {
    display: "table",
    width: "auto",
    border: 'none',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 30,
  },
  t3tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t3tableHeadCol: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    padding: '0px 3px',
    marginBottom: 0,
  },
  t3tableHeadCell: {
    fontSize: 10,
    marginBottom: 3,
  },

  t3tableCol1: {
    width: "65%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t3tableCol2: {
    width: "35%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t3tableCell: {
    padding: '5px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10
  },

  // Table 4
  t4table: {
    display: "table",
    width: "auto",
    border: 'none',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 40,
  },
  t4tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t4tableHeadCol: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    padding: '0px 3px',
    marginBottom: 0,
  },
  t4tableHeadCell: {
    fontSize: 10,
    marginBottom: 3,
  },

  t4tableCol1: {
    width: "30%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t4tableCol2: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t4tableCol3: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t4tableCol4: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t4tableCol5: {
    width: "20%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t4tableCell: {
    padding: '5px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10
  },

  // Table 5
  t5table: {
    display: "table",
    width: "auto",
    border: 'none',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20,
  },
  t5tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t5tableHeadCol: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    padding: '0px 3px',
    marginBottom: 0,
  },
  t5tableHeadCell: {
    fontSize: 10,
    marginBottom: 7,
    textAlign: 'center',
  },
  t5tableCol1: {
    width: "35%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t5tableCol2: {
    width: "65%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t5tableCell: {
    padding: '5px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10
  },
  description: {
    marginTop: 30,
  },
  briefDescription: {
    fontSize: 10,
  },
  briefDescriptionText: {
    marginTop: 40,
    border: '1px solid black',
    fontSize: 10,
    height: 60,
    textAlign: 'center',
    padding: '3px 5px',
    marginLeft: 5,
  },
  signatureOfDelivery: {
    fontSize: 10,
    marginTop: 40,

  },
  signaturePara: {
    fontSize: 10,
    marginTop: 20,
    color: 'red',
  },

  // Table 6
  t6table: {
    display: "table",
    width: "auto",
    border: '1px solid black',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    marginTop: 2,
  },
  t6tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t6tableCol1: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t6tableCol2: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t6tableCell: {
    padding: '5px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10
  },

  // Table 7
  t7table: {
    display: "table",
    width: "auto",
    border: '1px solid black',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    marginTop: 30,
  },
  t7tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  t7tableCol1: {
    width: "35%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t7tableCol2: {
    width: "65%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: '0px 3px',
  },
  t7tableLastCol1: {
    width: "35%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: '0px 3px',
  },
  t7tableLastCol2: {
    width: "65%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: '0px 3px',
  },
  t7tableCell: {
    padding: '3px 0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 10,
  },
  bottomBox: {
    marginTop: 62,
    width: '100%',
    borderBottom: '1px solid black',
  },
  bottomBoxTitle: {
    fontSize: 10,
    backgroundColor: '#59315F',
    border: '1px solid black',
    color: 'white',
    padding: '2px 1px',
  },
  bottomBoxDescription: {
    fontSize: 10,
    padding: '2px 1px',
    height: 100,
  },
});
export default styles;  