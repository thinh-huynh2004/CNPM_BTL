import React from 'react';
import './HistoryPrint.module.css';
const data = [
    { STT: 1, tenTaiLieu: "Capstone_Project_Autumn_2023", dinhDang: "PDF", ngayIn: "30/9/2024 - 18:38", soTrang: 5, khoGiay: "A4", matTo: 2 },
    { STT: 2, tenTaiLieu: "Capstone_Project_Autumn_2024", dinhDang: "PNG", ngayIn: "03/11/2024 - 10:10", soTrang: 12, khoGiay: "A5", matTo: 1 },
    { STT: 3, tenTaiLieu: "Capstone_Project_Autumn_2025", dinhDang: "DOCX", ngayIn: "11/11/2024 - 12:00", soTrang: 4, khoGiay: "A3", matTo: 2 },
    { STT: 4, tenTaiLieu: "Capstone_Project_Autumn_2026", dinhDang: "EXE", ngayIn: "01/10/2024 - 08:08", soTrang: 3, khoGiay: "A4", matTo: 2 },
    { STT: 5, tenTaiLieu: "Capstone_Project_Autumn_2027", dinhDang: "PPTX", ngayIn: "24/9/2024 - 13:45", soTrang: 7, khoGiay: "A4", matTo: 2 },
    { STT: 6, tenTaiLieu: "Capstone_Project_Autumn_2028", dinhDang: "PDF", ngayIn: "16/11/2024 - 15:15", soTrang: 22, khoGiay: "A3", matTo: 4 },
    { STT: 7, tenTaiLieu: "Capstone_Project_Autumn_2023", dinhDang: "PDF", ngayIn: "30/9/2024 - 18:38", soTrang: 5, khoGiay: "A4", matTo: 2 },
    { STT: 8, tenTaiLieu: "Capstone_Project_Autumn_2024", dinhDang: "PNG", ngayIn: "03/11/2024 - 10:10", soTrang: 12, khoGiay: "A5", matTo: 1 },
    { STT: 9, tenTaiLieu: "Capstone_Project_Autumn_2025", dinhDang: "DOCX", ngayIn: "11/11/2024 - 12:00", soTrang: 4, khoGiay: "A3", matTo: 2 },
    { STT: 10, tenTaiLieu: "Capstone_Project_Autumn_2026", dinhDang: "EXE", ngayIn: "01/10/2024 - 08:08", soTrang: 3, khoGiay: "A4", matTo: 2 },
    { STT: 11, tenTaiLieu: "Capstone_Project_Autumn_2027", dinhDang: "PPTX", ngayIn: "24/9/2024 - 13:45", soTrang: 7, khoGiay: "A4", matTo: 2 },
    { STT: 12, tenTaiLieu: "Capstone_Project_Autumn_2028", dinhDang: "PDF", ngayIn: "16/11/2024 - 15:15", soTrang: 22, khoGiay: "A3", matTo: 4 },
];

const History_print = () => {
    return (
        <div className='container'>
            <table className='printHis-table'>
                <thead className='printHis-table-head'>
                    <tr className='printHis-table-row'>
                        <td colSpan="7" className='totalCount'>Tổng: {data.length}</td>
                    </tr>
                    <tr className='printHis-table-row'>
                        <th className='printHis-table-th'>STT</th>
                        <th className='printHis-table-th'>Tên tài liệu</th>
                        <th className='printHis-table-th'>Định dạng</th>
                        <th className='printHis-table-th'>Ngày in</th>
                        <th className='printHis-table-th'>Số trang</th>
                        <th className='printHis-table-th'>Khổ giấy</th>
                        <th className='printHis-table-th'>Mặt/tờ</th>
                    </tr>
                </thead>
                <tbody className='printHis-table-body'>
                    {data.map((item, index) => (
                        <tr className='printHis-table-row' key={index}>
                            <td className='printHis-table-td'>
                                {index + 1}</td>
                            <td className='printHis-table-td'>
                                {item.tenTaiLieu}</td>
                            <td className='printHis-table-td'>
                                {item.dinhDang}</td>
                            <td className='printHis-table-td'>
                                {item.ngayIn}</td>
                            <td className='printHis-table-td'>
                                {item.soTrang}</td>
                            <td className='printHis-table-td'>
                                {item.khoGiay}</td>
                            <td className='printHis-table-td'>
                                {item.matTo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History_print;
