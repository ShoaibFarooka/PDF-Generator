import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import styles from '../Styles/StyleSheet';
import { Image } from '@react-pdf/renderer';

function PDF({ formData, logo1, logo2 }) {
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.bar}></View>
          <View style={styles.imageRow}>
            {logo1 &&
              <Image
                style={styles.image1}
                src={logo1}
              />
            }
            {logo2 &&
              <Image
                style={styles.image2}
                src={logo2}
              />
            }
          </View>
          <View style={styles.bar}></View>
          <View style={styles.dataContainer}>
            <Text style={styles.heading1}>{formData.projectName}</Text>
            <Text style={styles.heading2}>{formData.documentName}</Text>
            <Text style={styles.heading3}>{formData.templateNo}</Text>
          </View>
          <View style={styles.t1table}>
            <View style={styles.t1tableRow}>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.revision}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.description}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.date}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.originator}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.checker}</Text>
              </View>
            </View>
            <View style={styles.t1tableRow}>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.revisionText}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.descriptionText} </Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.dateText}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.originatorText}</Text>
              </View>
              <View style={styles.t1tableCol}>
                <Text style={styles.t1tableCell}>{formData.checkerText}</Text>
              </View>
            </View>
          </View>
          <View style={styles.t2table}>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2ProjectName}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2ProjectNameText}</Text>
              </View>
            </View>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2Location}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2LocationText} </Text>
              </View>
            </View>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2Manager}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2ManagerText} </Text>
              </View>
            </View>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2Contact}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2ContactText} </Text>
              </View>
            </View>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2Weather}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2WeatherText} </Text>
              </View>
            </View>
            <View style={styles.t2tableRow}>
              <View style={styles.t2tableRow6Col1}>
                <Text style={styles.t2tableCell}>{formData.t2Date}</Text>
              </View>
              <View style={styles.t2tableRow6Col2}>
                <Text style={styles.t2tableCell}>{formData.t2DateText} </Text>
              </View>
              <View style={styles.t2tableRow6Col3}>
                <Text style={styles.t2tableCell}>{formData.t2StartTime} </Text>
              </View>
              <View style={styles.t2tableRow6Col4}>
                <Text style={styles.t2tableCell}>{formData.t2StartTimeText} </Text>
              </View>
              <View style={styles.t2tableRow6Col5}>
                <Text style={styles.t2tableCell}>{formData.t2FinishTime} </Text>
              </View>
              <View style={styles.t2tableRow6Col6}>
                <Text style={styles.t2tableCell}>{formData.t2FinishTimeText} </Text>
              </View>
            </View>

            <View style={styles.t2tableRow}>
              <View style={styles.t2tableCol1}>
                <Text style={styles.t2tableCell}>{formData.t2Aid}</Text>
              </View>
              <View style={styles.t2tableCol2}>
                <Text style={styles.t2tableCell}>{formData.t2AidText} </Text>
              </View>
            </View>

          </View>
          <View style={styles.t3table}>
            <View style={styles.t3tableRow}>
              <View style={styles.t3tableHeadCol}>
                <Text style={styles.t3tableHeadCell}>{formData.t3AssociatedDocumentation}</Text>
              </View>
            </View>
            <View style={styles.t3tableRow}>
              <View style={styles.t3tableCol1}>
                <Text style={styles.t3tableCell}>{formData.t3DocumentNumber}</Text>
              </View>
              <View style={styles.t3tableCol2}>
                <Text style={styles.t3tableCell}>{formData.t3Title} </Text>
              </View>
            </View>
            <View style={styles.t3tableRow}>
              <View style={styles.t3tableCol1}>
                <Text style={styles.t3tableCell}>{formData.t3DocumentNumberText1}</Text>
              </View>
              <View style={styles.t3tableCol2}>
                <Text style={styles.t3tableCell}>{formData.t3TitleText1} </Text>
              </View>
            </View>
            <View style={styles.t3tableRow}>
              <View style={styles.t3tableCol1}>
                <Text style={styles.t3tableCell}>{formData.t3DocumentNumberText2}</Text>
              </View>
              <View style={styles.t3tableCol2}>
                <Text style={styles.t3tableCell}>{formData.t3TitleText2} </Text>
              </View>
            </View>
          </View>
          <View style={styles.t4table}>
            <View style={styles.t4tableRow}>
              <View style={styles.t4tableHeadCol}>
                <Text style={styles.t4tableHeadCell}>{formData.t4AssociatedPermits}</Text>
              </View>
            </View>
            <View style={styles.t4tableRow}>
              <View style={styles.t4tableCol1}>
                <Text style={styles.t4tableCell}>{formData.t4PermitNumber}</Text>
              </View>
              <View style={styles.t4tableCol2}>
                <Text style={styles.t4tableCell}>{formData.t4Type} </Text>
              </View>
              <View style={styles.t4tableCol3}>
                <Text style={styles.t4tableCell}>{formData.t4TimeOpened} </Text>
              </View>
              <View style={styles.t4tableCol4}>
                <Text style={styles.t4tableCell}>{formData.t4TimeClosed} </Text>
              </View>
              <View style={styles.t4tableCol5}>
                <Text style={styles.t4tableCell}>{formData.t4IssuedBy} </Text>
              </View>
            </View>
            <View style={styles.t4tableRow}>
              <View style={styles.t4tableCol1}>
                <Text style={styles.t4tableCell}>{formData.t4PermitNumberText1}</Text>
              </View>
              <View style={styles.t4tableCol2}>
                <Text style={styles.t4tableCell}>{formData.t4TypeText1} </Text>
              </View>
              <View style={styles.t4tableCol3}>
                <Text style={styles.t4tableCell}>{formData.t4TimeOpenedText1} </Text>
              </View>
              <View style={styles.t4tableCol4}>
                <Text style={styles.t4tableCell}>{formData.t4TimeClosedText1} </Text>
              </View>
              <View style={styles.t4tableCol5}>
                <Text style={styles.t4tableCell}>{formData.t4IssuedByText1} </Text>
              </View>
            </View>
            <View style={styles.t4tableRow}>
              <View style={styles.t4tableCol1}>
                <Text style={styles.t4tableCell}>{formData.t4PermitNumberText2}</Text>
              </View>
              <View style={styles.t4tableCol2}>
                <Text style={styles.t4tableCell}>{formData.t4TypeText2} </Text>
              </View>
              <View style={styles.t4tableCol3}>
                <Text style={styles.t4tableCell}>{formData.t4TimeOpenedText2} </Text>
              </View>
              <View style={styles.t4tableCol4}>
                <Text style={styles.t4tableCell}>{formData.t4TimeClosedText2} </Text>
              </View>
              <View style={styles.t4tableCol5}>
                <Text style={styles.t4tableCell}>{formData.t4IssuedByText2} </Text>
              </View>
            </View>
            <View style={styles.t4tableRow}>
              <View style={styles.t4tableCol1}>
                <Text style={styles.t4tableCell}>{formData.t4PermitNumberText3}</Text>
              </View>
              <View style={styles.t4tableCol2}>
                <Text style={styles.t4tableCell}>{formData.t4TypeText3} </Text>
              </View>
              <View style={styles.t4tableCol3}>
                <Text style={styles.t4tableCell}>{formData.t4TimeOpenedText3} </Text>
              </View>
              <View style={styles.t4tableCol4}>
                <Text style={styles.t4tableCell}>{formData.t4TimeClosedText3} </Text>
              </View>
              <View style={styles.t4tableCol5}>
                <Text style={styles.t4tableCell}>{formData.t4IssuedByText3} </Text>
              </View>
            </View>
          </View>
          <View style={styles.t5table}>
            <View style={styles.t5tableRow}>
              <View style={styles.t5tableHeadCol}>
                <Text style={styles.t5tableHeadCell}>{formData.t5PPERequirements}</Text>
              </View>
            </View>
            <View style={styles.t5tableRow}>
              <View style={styles.t5tableCol1}>
                <Text style={styles.t5tableCell}>{formData.t5ItemsRequired}</Text>
              </View>
              <View style={styles.t5tableCol2}>
                <Text style={styles.t5tableCell}>{formData.t5ActivityRequiredFor} </Text>
              </View>
            </View>
            <View style={styles.t5tableRow}>
              <View style={styles.t5tableCol1}>
                <Text style={styles.t5tableCell}>{formData.t5ItemsRequiredText1}</Text>
              </View>
              <View style={styles.t5tableCol2}>
                <Text style={styles.t5tableCell}>{formData.t5ActivityRequiredForText1} </Text>
              </View>
            </View>
            <View style={styles.t5tableRow}>
              <View style={styles.t5tableCol1}>
                <Text style={styles.t5tableCell}>{formData.t5ItemsRequiredText2}</Text>
              </View>
              <View style={styles.t5tableCol2}>
                <Text style={styles.t5tableCell}>{formData.t5ActivityRequiredForText2} </Text>
              </View>
            </View>
            <View style={styles.t5tableRow}>
              <View style={styles.t5tableCol1}>
                <Text style={styles.t5tableCell}>{formData.t5ItemsRequiredText3}</Text>
              </View>
              <View style={styles.t5tableCol2}>
                <Text style={styles.t5tableCell}>{formData.t5ActivityRequiredForText3} </Text>
              </View>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.briefDescription}>{formData.briefDescription}</Text>
            <Text style={styles.briefDescriptionText}>{formData.briefDescriptionText}</Text>
            <Text style={styles.signatureOfDelivery}>{formData.signatureOfDelivery}</Text>
            <Text style={styles.signaturePara}>{formData.signaturePara}</Text>
          </View>
          <View style={styles.t6table}>
            <View style={styles.t6tableRow}>
              <View style={styles.t6tableCol1}>
                <Text style={styles.t6tableCell}>{formData.t6Name}</Text>
              </View>
              <View style={styles.t6tableCol2}>
                <Text style={styles.t6tableCell}>{formData.t6Signature} </Text>
              </View>
            </View>
            <View style={styles.t6tableRow}>
              <View style={styles.t6tableCol1}>
                <Text style={styles.t6tableCell}>{formData.t6NameText}</Text>
              </View>
              <View style={styles.t6tableCol2}>
                <Text style={styles.t6tableCell}>{formData.t6SignatureText} </Text>
              </View>
            </View>
          </View>
          <View style={styles.t7table}>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7Date}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7DateText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7ProjectName}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7ProjectNameText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7WorksLocation}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7WorksLocationText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7RAMSReference}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7RAMSReferenceText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7PermitReference}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7PermitReferenceText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7PermitActivated}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7PermitActivatedText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7PermitDeactivated}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7PermitDeactivatedText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7Shift}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7ShiftText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7Staff}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7StaffText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7Hours}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7HoursText} </Text>
              </View>
            </View>
            <View style={styles.t7tableRow}>
              <View style={styles.t7tableCol1}>
                <Text style={styles.t7tableCell}>{formData.t7PersonInCharge}</Text>
              </View>
              <View style={styles.t7tableCol2}>
                <Text style={styles.t7tableCell}>{formData.t7PersonInChargeText} </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomBox}>
            <Text style={styles.bottomBoxTitle}>{formData.bottomWorksUndertaken}</Text>
            <Text style={styles.bottomBoxDescription}>{formData.bottomWorksUndertakenText}</Text>
            <Text style={styles.bottomBoxTitle}>{formData.bottomDelays}</Text>
            <Text style={styles.bottomBoxDescription}>{formData.bottomDelaysText}</Text>
            <Text style={styles.bottomBoxTitle}>{formData.bottomSafetyIssues}</Text>
            <Text style={styles.bottomBoxDescription}>{formData.bottomSafetyIssuesText}</Text>
            <Text style={styles.bottomBoxTitle}>{formData.bottomIssuesToBeResolved}</Text>
            <Text style={styles.bottomBoxDescription}>{formData.bottomIssuesToBeResolvedText}</Text>
          </View>

        </View>
      </Page>
    </Document>
  );
}


export default PDF;
