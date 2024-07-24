import { React, useState } from 'react';
import '../Styles/FormBox.css';
import axios from 'axios';
// import PDF from '../Components/PDF';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';
import image from '../Images/upload.png';
import Confirmation from './Confirmation';

function FormBox() {
    const [formData, setFormData] = useState({
        projectName: 'Project Name',
        documentName: 'Document Name',
        templateNo: 'Template No: ',
        revision: 'Revision',
        description: 'Description',
        date: 'Date',
        originator: 'Originator',
        checker: 'Checker',
        revisionText: '',
        descriptionText: '',
        dateText: '',
        originatorText: '',
        checkerText: '',
        t2ProjectName: 'Project Name:',
        t2ProjectNameText: '',
        t2Location: 'Location:',
        t2LocationText: '',
        t2Manager: 'Supervisor / manager responsible for the work:',
        t2ManagerText: '',
        t2Contact: 'Contact Details:',
        t2ContactText: '',
        t2Weather: 'Weather Conditions:',
        t2WeatherText: '',
        t2Date: 'Date:',
        t2DateText: '',
        t2StartTime: 'Start Time:',
        t2StartTimeText: '',
        t2FinishTime: 'Finish Time:',
        t2FinishTimeText: '',
        t2Aid: 'First Aid Cover:',
        t2AidText: '',
        t3AssociatedDocumentation: 'Associated Documentation:',
        t3DocumentNumber: 'Document Number:',
        t3Title: 'Title:',
        t3DocumentNumberText1: 'FUJ-',
        t3TitleText1: 'Detailed Design Equipment and Cabling Surveys',
        t3DocumentNumberText2: '',
        t3TitleText2: '',
        t4AssociatedPermits: 'Associated Permits:',
        t4PermitNumber: 'Permit No.',
        t4Type: 'Type',
        t4TimeOpened: 'Time Opened',
        t4TimeClosed: 'Time Closed',
        t4IssuedBy: 'Issued By',
        t4PermitNumberText1: 'S-12381',
        t4TypeText1: 'Station',
        t4TimeOpenedText1: '2300',
        t4TimeClosedText1: '0340',
        t4IssuedByText1: 'Harrison',
        t4PermitNumberText2: '',
        t4TypeText2: '',
        t4TimeOpenedText2: '',
        t4TimeClosedText2: '',
        t4IssuedByText2: '',
        t4PermitNumberText3: '',
        t4TypeText3: '',
        t4TimeOpenedText3: '',
        t4TimeClosedText3: '',
        t4IssuedByText3: '',
        t5PPERequirements: 'PPE Requirements:',
        t5ItemsRequired: 'Items Required',
        t5ActivityRequiredFor: 'Activity Required For',
        t5ItemsRequiredText1: '6 Point PPE',
        t5ActivityRequiredForText1: 'Working within Vent building',
        t5ItemsRequiredText2: '',
        t5ActivityRequiredForText2: '',
        t5ItemsRequiredText3: '',
        t5ActivityRequiredForText3: '',
        briefDescription: 'Brief Description and Sequence of Works:',
        briefDescriptionText: 'Brief group of MS and RA. Signed.',
        signatureOfDelivery: 'Signature of Delivery:',
        signaturePara: '(By Signing you are confirming you have received a Pre-Works briefing, that you are fully conversant with the work to be undertaken during the shift and that all associated documentation is present and correct).',
        t6Name: 'Name (PRINT)',
        t6Signature: 'SIGNATURE',
        t6NameText: '',
        t6SignatureText: '',
        t7Date: 'Date:',
        t7DateText: '',
        t7ProjectName: 'Project Name:',
        t7ProjectNameText: '',
        t7WorksLocation: 'Works Location:',
        t7WorksLocationText: '',
        t7RAMSReference: 'RAMS Reference:',
        t7RAMSReferenceText: '',
        t7PermitReference: 'Permit Reference:',
        t7PermitReferenceText: '',
        t7PermitActivated: 'Permit Activated:',
        t7PermitActivatedText: '',
        t7PermitDeactivated: 'Permit Deactivated:',
        t7PermitDeactivatedText: '',
        t7Shift: 'Day or Night Shift:',
        t7ShiftText: '',
        t7Staff: 'Number of staff working on Site:',
        t7StaffText: '',
        t7Hours: 'Number of hours worked:',
        t7HoursText: '',
        t7PersonInCharge: 'Person in Charge:',
        t7PersonInChargeText: '',
        bottomWorksUndertaken: 'Works undertaken:',
        bottomWorksUndertakenText: '',
        bottomDelays: 'Any delays or issues during shift:',
        bottomDelaysText: '',
        bottomSafetyIssues: 'Safety issues identified during shift:',
        bottomSafetyIssuesText: '',
        bottomIssuesToBeResolved: 'Any blockers or issues to be resolved before next shift:',
        bottomIssuesToBeResolvedText: '',

    });

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [selectedFilesCount, setSelectedFilesCount] = useState(0);
    const [confirmation, setConfirmation] = useState(false);

    const handleFilesChange = (event) => {
        setSelectedFiles(event.target.files);
        setSelectedFilesCount(event.target.files.length);
    };

    const handleImageUpload1 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage1(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleImageUpload2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage2(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // const generatePDF = () => {
    //     return <PDF formData={formData} logo1={image1} logo2={image2} />;
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataJSON = JSON.stringify(formData);
        const RequestFormData = new FormData();
        RequestFormData.append('data', formDataJSON);
        RequestFormData.append('logo1', image1);
        RequestFormData.append('logo2', image2);

        if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                RequestFormData.append(`image${i}`, selectedFiles[i]);
            }
        }
        // const formDataObject = {};
        // for (const [key, value] of RequestFormData.entries()) {
        //     formDataObject[key] = value;
        // }
        // console.log('Sent Data Object:', formDataObject);
        try {
            const res = await axios.post('http://localhost:3001/send-report', RequestFormData);
            if (res.status === 200) {
                console.log('Report is sent to email!');
                setConfirmation(true);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }
    return (
        <>
            {confirmation ? <Confirmation /> :
                <div className='FormBox'>
                    <div className='header'>
                        🌐 FormBox
                    </div>
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='bar'></div>
                        <div>
                            <div className='logo-div'>
                                <div className='logo1'>
                                    <label className="image-upload" htmlFor="imageInput1">
                                        {image1 ? (
                                            <img
                                                src={image1}
                                                alt="logo1"
                                                style={{ maxWidth: '200px', maxHeight: '70px' }}
                                            />
                                        ) : (
                                            <div className="empty-box">Project Logo</div>
                                        )}
                                    </label>
                                    <input
                                        type="file"
                                        id="imageInput1"
                                        accept="image/*"
                                        onChange={handleImageUpload1}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                <div className='logo2'>
                                    <label className="image-upload" htmlFor="imageInput2">
                                        {image2 ? (
                                            <img
                                                src={image2}
                                                alt="logo2"
                                                style={{ maxWidth: '200px', maxHeight: '70px' }}
                                            />
                                        ) : (
                                            <div className="empty-box">Project Logo</div>
                                        )}
                                    </label>
                                    <input
                                        type="file"
                                        id="imageInput2"
                                        accept="image/*"
                                        onChange={handleImageUpload2}
                                        style={{ display: 'none' }}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className='bar'></div>

                        <div>
                            <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="text" name="documentName" value={formData.documentName} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="text" name="templateNo" value={formData.templateNo} onChange={handleChange} />
                        </div>
                        <div className='table-container'>
                            <table className='table1'>
                                <thead className='thead1'>
                                    <tr>
                                        <td>
                                            <input type="text" name="revision" value={formData.revision} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="description" value={formData.description} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="date" value={formData.date} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="originator" value={formData.originator} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="checker" value={formData.checker} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className='tbody1'>
                                    <tr>
                                        <td>
                                            <input type="text" name="revisionText" value={formData.revisionText} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="descriptionText" value={formData.descriptionText} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="dateText" value={formData.dateText} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="originatorText" value={formData.originatorText} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="text" name="checkerText" value={formData.checkerText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='table-container'>
                            <table className='table2 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>

                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t2ProjectName" value={formData.t2ProjectName} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <input type="text" name="t2ProjectNameText" value={formData.t2ProjectNameText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t2Location" value={formData.t2Location} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <input type="text" name="t2LocationText" value={formData.t2LocationText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <textarea name="t2Manager" value={formData.t2Manager} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <textarea type="text" name="t2ManagerText" value={formData.t2ManagerText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t2Contact" value={formData.t2Contact} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <input type="text" name="t2ContactText" value={formData.t2ContactText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t2Weather" value={formData.t2Weather} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <input type="text" name="t2WeatherText" value={formData.t2WeatherText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='six-items'>
                                        <td colSpan='2' className=''>
                                            <input type="text" name="t2Date" value={formData.t2Date} onChange={handleChange} />
                                        </td>
                                        <td colSpan='6' className=''>
                                            <input type="text" name="t2DateText" value={formData.t2DateText} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className=''>
                                            <input type="text" name="t2StartTime" value={formData.t2StartTime} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className=''>
                                            <input type="text" name="t2StartTimeText" value={formData.t2StartTimeText} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className=''>
                                            <input type="text" name="t2FinishTime" value={formData.t2FinishTime} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className=''>
                                            <input type="text" name="t2FinishTimeText" value={formData.t2FinishTimeText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t2Aid" value={formData.t2Aid} onChange={handleChange} />
                                        </td>
                                        <td colSpan='16' className='last-data'>
                                            <input type="text" name="t2AidText" value={formData.t2AidText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='table-container'>
                            <table className='table3 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>

                                <thead>
                                    <tr>
                                        <td colSpan='20' >
                                            <input type="text" name="t3AssociatedDocumentation" value={formData.t3AssociatedDocumentation} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='12' className='first-data'>
                                            <input type="text" name="t3DocumentNumber" value={formData.t3DocumentNumber} onChange={handleChange} />
                                        </td>
                                        <td colSpan='8' className='last-data'>
                                            <input type="text" name="t3Title" value={formData.t3Title} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='12' className='first-data'>
                                            <input type="text" name="t3DocumentNumberText1" value={formData.t3DocumentNumberText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='8' className='last-data'>
                                            <textarea name="t3TitleText1" value={formData.t3TitleText1} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='12' className='first-data'>
                                            <input type="text" name="t3DocumentNumberText2" value={formData.t3DocumentNumberText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='8' className='last-data'>
                                            <textarea name="t3TitleText2" value={formData.t3TitleText2} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='table-container'>
                            <table className='table4 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>

                                <thead>
                                    <tr>
                                        <td colSpan='20' >
                                            <input type="text" name="t4AssociatedPermits" value={formData.t4AssociatedPermits} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t4PermitNumber" value={formData.t4PermitNumber} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className='first-data'>
                                            <input type="text" name="t4Type" value={formData.t4Type} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeOpened" value={formData.t4TimeOpened} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeClosed" value={formData.t4TimeClosed} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='last-data'>
                                            <input type="text" name="t4IssuedBy" value={formData.t4IssuedBy} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t4PermitNumberText1" value={formData.t4PermitNumberText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className='first-data'>
                                            <input type="text" name="t4TypeText1" value={formData.t4TypeText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeOpenedText1" value={formData.t4TimeOpenedText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeClosedText1" value={formData.t4TimeClosedText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='last-data'>
                                            <input type="text" name="t4IssuedByText1" value={formData.t4IssuedByText1} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t4PermitNumberText2" value={formData.t4PermitNumberText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className='first-data'>
                                            <input type="text" name="t4TypeText2" value={formData.t4TypeText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeOpenedText2" value={formData.t4TimeOpenedText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeClosedText2" value={formData.t4TimeClosedText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='last-data'>
                                            <input type="text" name="t4IssuedByText2" value={formData.t4IssuedByText2} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t4PermitNumberText3" value={formData.t4PermitNumberText3} onChange={handleChange} />
                                        </td>
                                        <td colSpan='2' className='first-data'>
                                            <input type="text" name="t4TypeText3" value={formData.t4TypeText3} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeOpenedText3" value={formData.t4TimeOpenedText3} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='first-data'>
                                            <input type="text" name="t4TimeClosedText3" value={formData.t4TimeClosedText3} onChange={handleChange} />
                                        </td>
                                        <td colSpan='4' className='last-data'>
                                            <input type="text" name="t4IssuedByText3" value={formData.t4IssuedByText3} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='table-container'>
                            <table className='table5 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>

                                <thead>
                                    <tr>
                                        <td colSpan='20' >
                                            <input type="text" name="t5PPERequirements" value={formData.t5PPERequirements} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='7' className='first-data'>
                                            <input type="text" name="t5ItemsRequired" value={formData.t5ItemsRequired} onChange={handleChange} />
                                        </td>
                                        <td colSpan='13' className='last-data'>
                                            <input type="text" name="t5ActivityRequiredFor" value={formData.t5ActivityRequiredFor} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='7' className='first-data'>
                                            <input type="text" name="t5ItemsRequiredText1" value={formData.t5ItemsRequiredText1} onChange={handleChange} />
                                        </td>
                                        <td colSpan='13' className='last-data'>
                                            <input type='text' name="t5ActivityRequiredForText1" value={formData.t5ActivityRequiredForText1} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='7' className='first-data'>
                                            <input type="text" name="t5ItemsRequiredText2" value={formData.t5ItemsRequiredText2} onChange={handleChange} />
                                        </td>
                                        <td colSpan='13' className='last-data'>
                                            <input type='text' name="t5ActivityRequiredForText2" value={formData.t5ActivityRequiredForText2} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='7' className='first-data'>
                                            <input type="text" name="t5ItemsRequiredText3" value={formData.t5ItemsRequiredText3} onChange={handleChange} />
                                        </td>
                                        <td colSpan='13' className='last-data'>
                                            <input type='text' name="t5ActivityRequiredForText3" value={formData.t5ActivityRequiredForText3} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <input type="text" className='briefdescinput' name="briefDescription" value={formData.briefDescription} onChange={handleChange} />
                            <textarea rows='6' className='briefdesctextarea' name="briefDescriptionText" value={formData.briefDescriptionText} onChange={handleChange} />
                            <input type="text" className='signaturedeliveryinput' name="signatureOfDelivery" value={formData.signatureOfDelivery} onChange={handleChange} />
                            <textarea rows='2' className='signaturepara' name="signaturePara" value={formData.signaturePara} onChange={handleChange} />

                        </div>
                        <div className='table-container'>
                            <table className='table6 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>
                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='10' className='first-data'>
                                            <input type="text" name="t6Name" value={formData.t6Name} onChange={handleChange} />
                                        </td>
                                        <td colSpan='10' className='last-data'>
                                            <input type="text" name="t6Signature" value={formData.t6Signature} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='10' className='first-data'>
                                            <input type="text" name="t6NameText" value={formData.t6NameText} onChange={handleChange} />
                                        </td>
                                        <td colSpan='10' className='last-data'>
                                            <input type='text' name="t6SignatureText" value={formData.t6SignatureText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='table-container'>
                            <table className='table7 common-table'>
                                <colgroup>
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                    <col width="5%" /><col width="5%" />
                                </colgroup>
                                <tbody>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7Date" value={formData.t7Date} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type="text" name="t7DateText" value={formData.t7DateText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7ProjectName" value={formData.t7ProjectName} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7ProjectNameText" value={formData.t7ProjectNameText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7WorksLocation" value={formData.t7WorksLocation} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7WorksLocationText" value={formData.t7WorksLocationText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7RAMSReference" value={formData.t7RAMSReference} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7RAMSReferenceText" value={formData.t7RAMSReferenceText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7PermitReference" value={formData.t7PermitReference} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7PermitReferenceText" value={formData.t7PermitReferenceText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7PermitActivated" value={formData.t7PermitActivated} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7PermitActivatedText" value={formData.t7PermitActivatedText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7PermitDeactivated" value={formData.t7PermitDeactivated} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7PermitDeactivatedText" value={formData.t7PermitDeactivatedText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7Shift" value={formData.t7Shift} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7ShiftText" value={formData.t7ShiftText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7Staff" value={formData.t7Staff} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7StaffText" value={formData.t7StaffText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7Hours" value={formData.t7Hours} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7HoursText" value={formData.t7HoursText} onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr className='two-items'>
                                        <td colSpan='6' className='first-data'>
                                            <input type="text" name="t7PersonInCharge" value={formData.t7PersonInCharge} onChange={handleChange} />
                                        </td>
                                        <td colSpan='14' className='last-data'>
                                            <input type='text' name="t7PersonInChargeText" value={formData.t7PersonInChargeText} onChange={handleChange} />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div>
                            <input className='details-input' type="text" name="bottomWorksUndertaken" value={formData.bottomWorksUndertaken} onChange={handleChange} />
                            <textarea className='details-textarea' rows='6' name="bottomWorksUndertakenText" value={formData.bottomWorksUndertakenText} onChange={handleChange} />
                            <input className='details-input' type="text" name="bottomDelays" value={formData.bottomDelays} onChange={handleChange} />
                            <textarea className='details-textarea' rows='6' name="bottomDelaysText" value={formData.bottomDelaysText} onChange={handleChange} />
                            <input className='details-input' type="text" name="bottomSafetyIssues" value={formData.bottomSafetyIssues} onChange={handleChange} />
                            <textarea className='details-textarea' rows='6' name="bottomSafetyIssuesText" value={formData.bottomSafetyIssuesText} onChange={handleChange} />
                            <input className='details-input' type="text" name="bottomIssuesToBeResolved" value={formData.bottomIssuesToBeResolved} onChange={handleChange} />
                            <textarea className='details-textarea' rows='6' name="bottomIssuesToBeResolvedText" value={formData.bottomIssuesToBeResolvedText} onChange={handleChange} />
                        </div>
                        <div className='bottom-bar'></div>
                        <div className='upload-image-div'>
                            <div className='upload-image-text'>Attach Photos</div>
                            <label className="image-upload" htmlFor="uploadImages">
                                <img
                                    src={image}
                                    alt='Upload Images'
                                    className='upload-image'
                                />
                            </label>
                            {selectedFilesCount !== 0 && <div>{selectedFilesCount} Images Selected</div>}
                            <input
                                type="file" multiple
                                accept="image/*"
                                id='uploadImages'
                                onChange={handleFilesChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <div className='submit-btn-div'>
                            <button onClick={handleSubmit} className='submit-btn'>Submit</button>
                        </div>
                        {/* <button type="submit">Generate PDF</button> */}
                    </form>
                    <div className='footer'>
                        © 2022 FormBox Inc.
                    </div>

                    {/* <PDFDownloadLink document={generatePDF()} fileName="example.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>

            <PDFViewer style={{ width: '100%', height: '600px' }}>
                <PDF formData={formData} logo1={image1} logo2={image2} />
            </PDFViewer> */}
                </div>
            }
        </>
    );
}
export default FormBox;