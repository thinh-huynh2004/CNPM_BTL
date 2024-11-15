import React, { useState, useEffect } from 'react';
import './MngPrintedFile.css';

function DocumentList() {
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchDocumentData = async () => {
      const data = [
        { id: 1, name: 'Capstone_Project_Autumn_2024', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 2, name: 'Capstone_Project_Autumn_2023', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 3, name: 'Capstone_Project_Autumn_2023', format: 'WORD', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 4, name: 'Capstone_Project_Autumn_2023', format: 'PPTS', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 5, name: 'Capstone_Project_Autumn_2023', format: 'XLXS', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
        { id: 6, name: 'Capstone_Project_Autumn_2023', format: 'PDF', date: '30/9/2024 - 18:38', pages: 5, size: 'A4', sides: 2 },
      ];

      setDocumentData(data);
      setTotalDocuments(data.length);
    };

    fetchDocumentData();
  }, []);

  return (
    <div className="container">
      <div className="header-filters">
        <div className="header">
          <h2 className='header-h2'>Tổng: {totalDocuments}</h2> {/* Hiển thị tổng số tài liệu động */}
        </div>
        <div className="filters">
          <div className="filter-group date-group">
            <div className="input-container">
              <label className='input-label' htmlFor="date">Ngày in</label>
              <input className='input' type="date" id="date" />
              <span>-</span>
              <input type="date" id="date-end" />
            </div>
            <div className="checkbox-container">
              <input className='input' type="checkbox" id="all-date" />
              <label className='input-label' htmlFor="all-date">Tất cả</label>
            </div>
          </div>
          <div className="filter-group mssv-group">
            <div className="input-container">
              <label className='input-label' htmlFor="mssv">MSSV</label>
              <input className='input' type="text" id="mssv" />
            </div>
            <div className="checkbox-container">
              <input className='input' type="checkbox" id="all-mssv" />
              <label className='input-label' htmlFor="all-mssv">Tất cả</label>
            </div>
          </div>
          <div className="filter-group paper-size-group">
            <div className="input-container">
              <label className='input-label' htmlFor="paper-size">Khổ giấy</label>
              <select id="paper-size">
                <option className='option'>Chọn</option>
                <option className='option'>A0</option>
                <option className='option'>A1</option>
                <option className='option'>A2</option>
                <option className='option'>A3</option>
                <option className='option'>A4</option>
                <option className='option'>A5</option>
              </select>
            </div>
            <div className="checkbox-container">
              <input className='input' type="checkbox" id="all-paper" />
              <label className='input-label' htmlFor="all-paper">Tất cả</label>
            </div>
          </div>
          <div className="filter-group printer-group">
            <div className="input-container">
              <label className='input-label' htmlFor="printer">Máy in</label>
              <input className='input' type="text" id="printer" />
            </div>
            <div className="checkbox-container">
              <input className='input' type="checkbox" id="all-printer" />
              <label className='input-label' htmlFor="all-printer">Tất cả</label>
            </div>
          </div>
          <button className="filter-button">Lọc</button>
        </div>
      </div>

      <table className='list-table'>
        <thead className='list-table-head'>
          <tr className='list-table-row'>
            <th className='list-table-cl-h'>STT</th>
            <th className='list-table-cl-h'>Tên tài liệu</th>
            <th className='list-table-cl-h'>Định dạng</th>
            <th className='list-table-cl-h'>Ngày in</th>
            <th className='list-table-cl-h'>Số trang</th>
            <th className='list-table-cl-h'>Khổ giấy</th>
            <th className='list-table-cl-h'>Mặt/tờ</th>
          </tr>
        </thead>
        <tbody className='list-table-body'>
          {documentData.map((doc, index) => (
            <tr className='list-table-row' key={doc.id}>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {index + 1}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.name}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.format}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.date}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.pages}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.size}</p></td>
              <td className='list-table-cl'>
                <p className='list-table-p'>
                  {doc.sides}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentList;
