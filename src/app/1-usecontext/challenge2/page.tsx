'use client';
import { DataContext } from '@/store/1-usecontext/challenge2/context';
import { useContext } from 'react';
export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>1-useContext / Challenge2</h1>
      <p>Simple String State + hook setState + localStorage</p>
      <div>
        <label htmlFor='#set'>Write to set context</label>
      </div >
      <div>
        <input id='set' value={dataManager.data} onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#get'>Context value is</label>
      </div>
      <div>
        <input id='get' value={dataManager.data} readOnly={true} disabled></input>
      </div >
    </>
  );
}
