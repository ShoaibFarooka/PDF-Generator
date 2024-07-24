const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const { Page, Text, View, Document, StyleSheet } = ReactPDF;
const { Image } = require('@react-pdf/renderer');

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

const PDF = ({ data }) => {
    return (
        <Document style={styles.document}>
            <Page size="A4" style={styles.page}>
                <View>
                    <View style={styles.bar}></View>
                    <View style={styles.imageRow}>
                        {data.logo1 &&
                            <Image
                                style={styles.image1}
                                src={data.logo1}
                            />
                        }
                        {data.logo2 &&
                            <Image
                                style={styles.image2}
                                src={data.logo2}
                            />
                        }
                    </View>
                    <View style={styles.bar}></View>
                    <View style={styles.dataContainer}>
                        <Text style={styles.heading1}>{data.formData.projectName}</Text>
                        <Text style={styles.heading2}>{data.formData.documentName}</Text>
                        <Text style={styles.heading3}>{data.formData.templateNo}</Text>
                    </View>
                    <View style={styles.t1table}>
                        <View style={styles.t1tableRow}>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.revision}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.description}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.date}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.originator}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.checker}</Text>
                            </View>
                        </View>
                        <View style={styles.t1tableRow}>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.revisionText}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.descriptionText} </Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.dateText}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.originatorText}</Text>
                            </View>
                            <View style={styles.t1tableCol}>
                                <Text style={styles.t1tableCell}>{data.formData.checkerText}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.t2table}>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2ProjectName}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2ProjectNameText}</Text>
                            </View>
                        </View>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Location}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2LocationText} </Text>
                            </View>
                        </View>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Manager}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2ManagerText} </Text>
                            </View>
                        </View>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Contact}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2ContactText} </Text>
                            </View>
                        </View>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Weather}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2WeatherText} </Text>
                            </View>
                        </View>
                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableRow6Col1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Date}</Text>
                            </View>
                            <View style={styles.t2tableRow6Col2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2DateText} </Text>
                            </View>
                            <View style={styles.t2tableRow6Col3}>
                                <Text style={styles.t2tableCell}>{data.formData.t2StartTime} </Text>
                            </View>
                            <View style={styles.t2tableRow6Col4}>
                                <Text style={styles.t2tableCell}>{data.formData.t2StartTimeText} </Text>
                            </View>
                            <View style={styles.t2tableRow6Col5}>
                                <Text style={styles.t2tableCell}>{data.formData.t2FinishTime} </Text>
                            </View>
                            <View style={styles.t2tableRow6Col6}>
                                <Text style={styles.t2tableCell}>{data.formData.t2FinishTimeText} </Text>
                            </View>
                        </View>

                        <View style={styles.t2tableRow}>
                            <View style={styles.t2tableCol1}>
                                <Text style={styles.t2tableCell}>{data.formData.t2Aid}</Text>
                            </View>
                            <View style={styles.t2tableCol2}>
                                <Text style={styles.t2tableCell}>{data.formData.t2AidText} </Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.t3table}>
                        <View style={styles.t3tableRow}>
                            <View style={styles.t3tableHeadCol}>
                                <Text style={styles.t3tableHeadCell}>{data.formData.t3AssociatedDocumentation}</Text>
                            </View>
                        </View>
                        <View style={styles.t3tableRow}>
                            <View style={styles.t3tableCol1}>
                                <Text style={styles.t3tableCell}>{data.formData.t3DocumentNumber}</Text>
                            </View>
                            <View style={styles.t3tableCol2}>
                                <Text style={styles.t3tableCell}>{data.formData.t3Title} </Text>
                            </View>
                        </View>
                        <View style={styles.t3tableRow}>
                            <View style={styles.t3tableCol1}>
                                <Text style={styles.t3tableCell}>{data.formData.t3DocumentNumberText1}</Text>
                            </View>
                            <View style={styles.t3tableCol2}>
                                <Text style={styles.t3tableCell}>{data.formData.t3TitleText1} </Text>
                            </View>
                        </View>
                        <View style={styles.t3tableRow}>
                            <View style={styles.t3tableCol1}>
                                <Text style={styles.t3tableCell}>{data.formData.t3DocumentNumberText2}</Text>
                            </View>
                            <View style={styles.t3tableCol2}>
                                <Text style={styles.t3tableCell}>{data.formData.t3TitleText2} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.t4table}>
                        <View style={styles.t4tableRow}>
                            <View style={styles.t4tableHeadCol}>
                                <Text style={styles.t4tableHeadCell}>{data.formData.t4AssociatedPermits}</Text>
                            </View>
                        </View>
                        <View style={styles.t4tableRow}>
                            <View style={styles.t4tableCol1}>
                                <Text style={styles.t4tableCell}>{data.formData.t4PermitNumber}</Text>
                            </View>
                            <View style={styles.t4tableCol2}>
                                <Text style={styles.t4tableCell}>{data.formData.t4Type} </Text>
                            </View>
                            <View style={styles.t4tableCol3}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeOpened} </Text>
                            </View>
                            <View style={styles.t4tableCol4}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeClosed} </Text>
                            </View>
                            <View style={styles.t4tableCol5}>
                                <Text style={styles.t4tableCell}>{data.formData.t4IssuedBy} </Text>
                            </View>
                        </View>
                        <View style={styles.t4tableRow}>
                            <View style={styles.t4tableCol1}>
                                <Text style={styles.t4tableCell}>{data.formData.t4PermitNumberText1}</Text>
                            </View>
                            <View style={styles.t4tableCol2}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TypeText1} </Text>
                            </View>
                            <View style={styles.t4tableCol3}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeOpenedText1} </Text>
                            </View>
                            <View style={styles.t4tableCol4}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeClosedText1} </Text>
                            </View>
                            <View style={styles.t4tableCol5}>
                                <Text style={styles.t4tableCell}>{data.formData.t4IssuedByText1} </Text>
                            </View>
                        </View>
                        <View style={styles.t4tableRow}>
                            <View style={styles.t4tableCol1}>
                                <Text style={styles.t4tableCell}>{data.formData.t4PermitNumberText2}</Text>
                            </View>
                            <View style={styles.t4tableCol2}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TypeText2} </Text>
                            </View>
                            <View style={styles.t4tableCol3}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeOpenedText2} </Text>
                            </View>
                            <View style={styles.t4tableCol4}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeClosedText2} </Text>
                            </View>
                            <View style={styles.t4tableCol5}>
                                <Text style={styles.t4tableCell}>{data.formData.t4IssuedByText2} </Text>
                            </View>
                        </View>
                        <View style={styles.t4tableRow}>
                            <View style={styles.t4tableCol1}>
                                <Text style={styles.t4tableCell}>{data.formData.t4PermitNumberText3}</Text>
                            </View>
                            <View style={styles.t4tableCol2}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TypeText3} </Text>
                            </View>
                            <View style={styles.t4tableCol3}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeOpenedText3} </Text>
                            </View>
                            <View style={styles.t4tableCol4}>
                                <Text style={styles.t4tableCell}>{data.formData.t4TimeClosedText3} </Text>
                            </View>
                            <View style={styles.t4tableCol5}>
                                <Text style={styles.t4tableCell}>{data.formData.t4IssuedByText3} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.t5table}>
                        <View style={styles.t5tableRow}>
                            <View style={styles.t5tableHeadCol}>
                                <Text style={styles.t5tableHeadCell}>{data.formData.t5PPERequirements}</Text>
                            </View>
                        </View>
                        <View style={styles.t5tableRow}>
                            <View style={styles.t5tableCol1}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ItemsRequired}</Text>
                            </View>
                            <View style={styles.t5tableCol2}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ActivityRequiredFor} </Text>
                            </View>
                        </View>
                        <View style={styles.t5tableRow}>
                            <View style={styles.t5tableCol1}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ItemsRequiredText1}</Text>
                            </View>
                            <View style={styles.t5tableCol2}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ActivityRequiredForText1} </Text>
                            </View>
                        </View>
                        <View style={styles.t5tableRow}>
                            <View style={styles.t5tableCol1}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ItemsRequiredText2}</Text>
                            </View>
                            <View style={styles.t5tableCol2}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ActivityRequiredForText2} </Text>
                            </View>
                        </View>
                        <View style={styles.t5tableRow}>
                            <View style={styles.t5tableCol1}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ItemsRequiredText3}</Text>
                            </View>
                            <View style={styles.t5tableCol2}>
                                <Text style={styles.t5tableCell}>{data.formData.t5ActivityRequiredForText3} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.briefDescription}>{data.formData.briefDescription}</Text>
                        <Text style={styles.briefDescriptionText}>{data.formData.briefDescriptionText}</Text>
                        <Text style={styles.signatureOfDelivery}>{data.formData.signatureOfDelivery}</Text>
                        <Text style={styles.signaturePara}>{data.formData.signaturePara}</Text>
                    </View>
                    <View style={styles.t6table}>
                        <View style={styles.t6tableRow}>
                            <View style={styles.t6tableCol1}>
                                <Text style={styles.t6tableCell}>{data.formData.t6Name}</Text>
                            </View>
                            <View style={styles.t6tableCol2}>
                                <Text style={styles.t6tableCell}>{data.formData.t6Signature} </Text>
                            </View>
                        </View>
                        <View style={styles.t6tableRow}>
                            <View style={styles.t6tableCol1}>
                                <Text style={styles.t6tableCell}>{data.formData.t6NameText}</Text>
                            </View>
                            <View style={styles.t6tableCol2}>
                                <Text style={styles.t6tableCell}>{data.formData.t6SignatureText} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.t7table}>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7Date}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7DateText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7ProjectName}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7ProjectNameText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7WorksLocation}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7WorksLocationText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7RAMSReference}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7RAMSReferenceText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitReference}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitReferenceText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitActivated}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitActivatedText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitDeactivated}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PermitDeactivatedText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7Shift}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7ShiftText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7Staff}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7StaffText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7Hours}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7HoursText} </Text>
                            </View>
                        </View>
                        <View style={styles.t7tableRow}>
                            <View style={styles.t7tableCol1}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PersonInCharge}</Text>
                            </View>
                            <View style={styles.t7tableCol2}>
                                <Text style={styles.t7tableCell}>{data.formData.t7PersonInChargeText} </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomBox}>
                        <Text style={styles.bottomBoxTitle}>{data.formData.bottomWorksUndertaken}</Text>
                        <Text style={styles.bottomBoxDescription}>{data.formData.bottomWorksUndertakenText}</Text>
                        <Text style={styles.bottomBoxTitle}>{data.formData.bottomDelays}</Text>
                        <Text style={styles.bottomBoxDescription}>{data.formData.bottomDelaysText}</Text>
                        <Text style={styles.bottomBoxTitle}>{data.formData.bottomSafetyIssues}</Text>
                        <Text style={styles.bottomBoxDescription}>{data.formData.bottomSafetyIssuesText}</Text>
                        <Text style={styles.bottomBoxTitle}>{data.formData.bottomIssuesToBeResolved}</Text>
                        <Text style={styles.bottomBoxDescription}>{data.formData.bottomIssuesToBeResolvedText}</Text>
                    </View>

                </View>
            </Page>
        </Document>
    );
};

module.exports = (data) => {
    return ReactPDF.renderToStream(<PDF data={data} />);
};
