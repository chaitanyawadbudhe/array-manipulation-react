import React , {useState} from 'react'
import './Mainpage.css'

const Mainpage = () => {
    let initialArr = ['','','','','']
    const [value, setValue] = useState()
    const [index, setIndex] = useState()
    const [arrData, setArrData] = useState(['','','','',''])
    let boxes = arrData.map((value,index)=>
        <span className='box'>{value}<span className='circle'>{index+1}</span></span>
    )

    const valueHandle = (event)=>{
        setValue(event.target.value)
    }
    const indexHandle = (event)=>{
        setIndex(event.target.value)
    }
    const insertAtFirstByUnshift = (event) => {
        let updatedArr = [...arrData]
        updatedArr.unshift(value)
        setArrData(updatedArr)
    }
    const insertAtIndex = (event) => {
        let updatedArr = [...arrData]
        updatedArr.splice(index-1,0,value)
        setArrData(updatedArr)
    }

    const appendATLastByPush = (event) => {
        let updatedArr = [...arrData]
        updatedArr.push(value)
        setArrData(updatedArr)
    }

    const updateFirstSplice = (event) => {
        let updatedArr = [...arrData]
        updatedArr.splice(0,1,value)
        setArrData(updatedArr)
    }

    const updateAtIndexSplice = (event) => {
        let updatedArr = [...arrData]
        updatedArr.splice(index-1,1,value)
        setArrData(updatedArr)
    }

    const updateAtLastSplice = (event) => {
        let updatedArr = [...arrData]
        updatedArr.splice(arrData.length-1,1,value)
        setArrData(updatedArr)
    }

    const deleteFirstShift = (event) => {
        let updatedArr = [...arrData]
        updatedArr.shift()
        setArrData(updatedArr)
    }

    const deleteAtIndexSplice = (event) => {
        let updatedArr = [...arrData]
        updatedArr.splice(index-1,1)
        setArrData(updatedArr)
    }

    const deleteLastPop = (event) => {
        let updatedArr = [...arrData]
        updatedArr.pop()
        setArrData(updatedArr)
    }

    const sort = (event) => {
        let updatedArr = [...arrData]
        updatedArr.sort()
        setArrData(updatedArr)
    }
    const reverse = (event) =>{
        let updatedArr = [...arrData]
        updatedArr.reverse()
        setArrData(updatedArr)
    }

    const reset = (event) => {
        let updatedArr = [...initialArr]
        setArrData(updatedArr)
        setValue('')
        setIndex('')
    }
    return (
        <div className='main-container'>
            <span className='box-container'>{boxes}</span>
            <div className='sub-container'>
                <h3>Array Manipulator</h3>
                <aside>
                    <label>Enter Value: <input type="text" onChange={valueHandle}/></label>
                    <label>Enter Index: <input type="text" onChange={indexHandle}/></label>
                </aside>
                <aside>
                    <button type="button" onClick={insertAtFirstByUnshift}>Insert at First (unshift)</button>
                    <button type="button" onClick={insertAtIndex}>Insert at Index (splice)</button>
                    <button type="button" onClick={appendATLastByPush}>Append at Last (push)</button>
                    <button type="button" onClick={updateFirstSplice}>Update First (splice)</button>
                    <button type="button" onClick={updateAtIndexSplice}>Update at Index (splice)</button>
                    <button type="button" onClick={updateAtLastSplice}>Update Last (splice)</button>
                </aside>
                <aside>
                    <button type="button" onClick={deleteFirstShift}>Delete First (shift)</button>
                    <button type="button" onClick={deleteAtIndexSplice}>Delete at Index (splice)</button>
                    <button type="button" onClick={deleteLastPop}>Delete Last (pop)</button>
                    <button type="button" onClick={sort}>Sort (sort)</button>
                    <button type="button" onClick={reverse}>Reverse (reverse)</button>
                    <button type="button" onClick={reset}>Reset</button>
                </aside>
            </div>
        </div>
    )
}
export default Mainpage
