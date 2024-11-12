import './File_manage.css'
import React, { useRef, useState } from 'react';
import Add_button from '../assets/add_button.svg'


function TableLoadedFile() {
    const data = [
        { name: "Tài liệu 1", format: "PDF", pages: 10, uploadDate: "2024-01-01" },
        { name: "Tài liệu 2", format: "DOCX", pages: 5, uploadDate: "2024-01-02" },
        { name: "Tài liệu 3", format: "PPTX", pages: 15, uploadDate: "2024-01-03" },
        { name: "Tài liệu 4", format: "PDF", pages: 8, uploadDate: "2024-01-04" },
        { name: "Tài liệu 5", format: "PDF", pages: 11, uploadDate: "2024-01-04" },
        { name: "Tài liệu 6", format: "DOCX", pages: 5, uploadDate: "2024-01-05" },
        { name: "Tài liệu 7", format: "DOCX", pages: 4, uploadDate: "2024-01-08" },
        { name: "Tài liệu 5", format: "PDF", pages: 11, uploadDate: "2024-01-04" },
        { name: "Tài liệu 6", format: "DOCX", pages: 5, uploadDate: "2024-01-05" },
        { name: "Tài liệu 7", format: "DOCX", pages: 4, uploadDate: "2024-01-08" },
    ];

    const renderTableRows = () => {
        return data.map((item, index) => (
            <tr className='row-of-table' key={index}>
                <td style={{ display: 'flex', alignItems: 'center' }} className='c1-of-table'>{index + 1}</td>
                <td style={{ display: 'flex', alignItems: 'center' }} className='c2-of-table'>{item.name}
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className='three-dots-more-detail'>
                        <path d="M18.2778 31.1992L18.2778 23.3659" stroke="#33363F" strokeWidth="5" strokeLinecap="round" />
                        <path d="M28.7222 31.1992L28.7222 23.3659" stroke="#33363F" strokeWidth="5" strokeLinecap="round" />
                        <path d="M0 10.3076H47H43.1667C41.2811 10.3076 40.3382 10.3076 39.7525 10.8934C39.1667 11.4792 39.1667 12.422 39.1667
                                 14.3076V40.2521C39.1667 42.1377 39.1667 43.0805 38.5809 43.6663C37.9951 44.2521 37.0523 44.2521 35.1667
                                 44.2521H11.8333C9.94772 44.2521 9.00491 44.2521 8.41912 43.6663C7.83333 43.0805 7.83333 42.1377 7.83333
                                 40.2521V14.3076C7.83333 12.422 7.83333 11.4792 7.24755 10.8934C6.66176 10.3076 5.71895 10.3076 3.83333
                                 10.3076H0Z" stroke="#33363F" strokeWidth="5" strokeLinecap="round" />
                        <path d="M14.0999 8.16924C14.3974 7.89164 13.9712 3.25271 14.8832 3.07775C15.7952 2.9028 22.3503 3.07778
                                 23.4999 3.07778C24.6495 3.07778 31.9879 2.90284 32.8999 3.07779C33.8119 3.25275 33.3857 8.28337 33.6832 
                                 8.56098" stroke="#33363F" strokeWidth="5" strokeLinecap="round" />
                    </svg>

                </td>
                <td style={{ display: 'flex', alignItems: 'center' }} className='c3-of-table'>{item.format}</td>
                <td style={{ display: 'flex', alignItems: 'center' }} className='c4-of-table'>{item.pages}</td>
                <td style={{ display: 'flex', alignItems: 'center' }} className='c5-of-table'>{item.uploadDate}</td>
            </tr>
        ));
    }

    //--------scrip add file from clien-------------//
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log("Selected file:", file);
      }
    };
    //<------------------------------------------>//

    return (
        <>
            <div onClick={handleButtonClick} className="add_button" >
                <img src={Add_button} alt="button" />
                
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>

            <div className="box-contain-table">
                <table className="contain_loaded_file">
                    <thead>
                        <tr className='row-of-table'>
                            <th className='c1-of-table'>STT</th>
                            <th className='c2-of-table'>Tài liệu đã tải lên</th>
                            <th className='c3-of-table'>Định dạng</th>
                            <th className='c4-of-table'>Số trang</th>
                            <th className='c5-of-table'>Ngày tải lên</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableLoadedFile