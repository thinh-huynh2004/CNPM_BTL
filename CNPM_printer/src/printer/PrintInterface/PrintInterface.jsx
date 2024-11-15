import React from 'react';
import './Printinterface.css';

const documentData = [
    "Capstone_Project_Autumn_1",
    "Capstone_Project_Autumn_2",
    "Capstone_Project_Autumn_3HCMUT_2023_2024_HK241&242",
    "Capstone_Project_Autumn_4",
    "Capstone_Project_Autumn_5_HK241_2024-2025",
    "Capstone_Project_Autumn_6",
    "Capstone_Project_Autumn_7",
    "Capstone_Project_Autumn_8",
    "Capstone_Project_Autumn_9",
    "Capstone_Project_Autumn_10",
    "Capstone_Project_Autumn_11",
    "Capstone_Project_Autumn_12"
];

const Print_control_panel = () => {
    return (
        <div className="contain_container">
        <div className="Interface_container">
            <div className="item item_L">
                <h2 className="choose-material">Chọn tài liệu đã tải lên</h2>
                <div className="table_contain">
                <table className="document-table" id="documentTable">
                    <tbody>
                        {documentData.map((doc, index) => (
                            <tr key={index}>
                                <td className='documentTable-td'>{doc}</td>
                                <td className='documentTable-td'><input type="checkbox" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            
            <div className="item item_R">
                <div className="header">
                    <h1>in</h1>
                </div>
                <div className="content">
                    <div className="left-panel">
                        <label className='left-panel-label' htmlFor="printer">Máy in</label>
                        <select className='left-panel-select' id="printer">
                            <option value="">Chọn máy in</option>
                        </select>
                        
                        <label className='left-panel-label' htmlFor="pages">Trang</label>
                        <select className='left-panel-select' id="pages">
                            <option value="">Chọn trang</option>
                        </select>

                        <label className='left-panel-label' htmlFor="paper-size">Khổ giấy</label>
                        <select className='left-panel-select' id="paper-size">
                            <option value="">Chọn khổ giấy</option>
                        </select>
                    </div>

                    <div className="divider"></div>

                    <div className="right-panel">
                        <label className='left-panel-label' htmlFor="pages-per-sheet">Số trang mỗi tờ</label>
                        <select className='left-panel-select' id="pages-per-sheet">
                            <option value="">Chọn số trang mỗi tờ</option>
                        </select>

                        <label className='left-panel-label' htmlFor="scale">Tỷ lệ</label>
                        <input type="text" id="scale" />

                        <label className='left-panel-label' htmlFor="margin">Lề</label>
                        <input type="text" id="margin" />
                    </div>
                </div>

                <div className="footer">
                    <p className='interfaceFoot-p'><span className="warning-icon">⚠️</span> Số giấy cần in nhiều hơn số giấy hiện có <br />    Vui lòng mua đủ giấy trước khi in</p>
                    <button className="print-button" onClick={() => alert("Đang thực hiện in. Vui lòng chờ...")}>in</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Print_control_panel;
