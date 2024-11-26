import React from 'react'

const Soancauhoi = () => {
    return (
        <div className='grid grid-cols-[2fr_4fr] gap-4 mt-10 mx-4'>
            <form >
                <div className='mx-2 flex justify-between'>
                    <p>Danh sách phần thi</p>
                    <button>Thêm mới</button>
                </div>
                <p>Phần 1</p>
                <button>sua</button>
                <hr className='my-3' />
                <p>danh mục câu hỏi</p>
                <div className='flex justify-start gap-2 mt-4'>
                    <button className='outline'>Thêm câu hỏi</button>
                    <button className='outline'> Thêm bằng văn bản</button>
                </div>
                <div className='flex flex-col justify-start items-start mt-4'>
                    <button className='outline'>Sắp xêp câu hỏi</button>
                    <button className='outline mt-4'>Xóa câu hỏi</button>
                </div>
            </form>




            <form className='outline px-2 flex flex-col justify-start items-start'>
                <p>Chỉnh sửa câu hỏi</p>
                <p>Loại câu hỏi</p>
                <select name="" id="">
                    <option value="">Một đáp án</option>
                    <option value="">Nhiều đáp án</option>
                    <option value="">đúng / sai</option>
                </select>
                <p>Soạn câu hỏi</p>
                <textarea name="" id="" className='outline'>

                </textarea>

                {/*  */}

                <p>Câu trả lời</p>
                <div className='flex flex-col'>
                    <div>
                        <input type="file" name="" id="" />
                    </div>
                    <textarea name="" id="" className='outline'>

                    </textarea>
                </div>
                <div className=' flex justify-between items-center mt-4 gap-2'>
                    <input type="radio" />
                    <p>đáp án 1</p>
                </div>
                {/*  */}
                <hr className=' w-[20%]' />
                <p>Câu trả lời</p>
                <textarea name="" id="" className='outline'>

                </textarea>
                <div className=' flex justify-between items-center mt-4 gap-2'>
                    <input type="radio" />
                    <p>đáp án 2</p>
                </div>
                {/*  */}
                <hr className=' w-[20%]' />
                <p>Câu trả lời</p>
                <textarea name="" id="" className='outline'>

                </textarea>
                <div className=' flex justify-between items-center mt-4 gap-2'>
                    <input type="radio" />
                    <p>đáp án 3</p>
                </div>
                {/*  */}
                <hr className=' w-[20%]' />
                <p>Câu trả lời</p>
                <textarea name="" id="" className='outline'>

                </textarea>
                <div className=' flex justify-between items-center mt-4 gap-2'>
                    <input type="radio" />
                    <p>đáp án 4</p>
                </div>
                <button>submit</button>
            </form>
        </div>


    )
}

export default Soancauhoi
