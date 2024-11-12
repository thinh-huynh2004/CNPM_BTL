import './printer_changeInfoCompleted.css'
import './printer_addCompleted.css'

function PrinterChangeInfoCompleted({onClose}) {
    return (
        <div className='addCompleted_fullScreen'>
            <div className="addCompleted_midBox">
                <div className="addCompleted_midBox_head">
                    <div className="addCompleted_midBox_head_img"></div>
                </div>
                <div className="addCompleted_midBox_mid">
                    Da luu
                </div>
                <div className="addCompleted_midBox_footer">
                    <button className="addCompleted_midBox_footer_done" onClick={onClose}>
                        Xong
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrinterChangeInfoCompleted