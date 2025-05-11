"use client"

import { Constituent } from './types'

interface ConstituentTableProps {
  constituents: Constituent[]
}

const styles = {
  th: "px-6 py-3 text-left text-sm font-medium text-gray-600 border-b",
  td: "px-6 py-4 text-sm text-gray-800 border-b",
};

export default function ConstituentTable({ constituents }: ConstituentTableProps){
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className='bg-gray-50'>
          <tr>
            <th className={styles.th}>First Name</th>
            <th className={styles.th}>Last Name</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Sign Up Date</th>
          </tr>
        </thead>
        <tbody>
          {constituents.map((constituent: Constituent, idx ) => {
            return (
              <tr key={idx} className='odd:bg-white even:bg-gray-50 hover:bg-gray-100'>
                <td className={styles.td}>{constituent.firstName}</td>
                <td className={styles.td}>{constituent.lastName}</td>
                <td className={styles.td}>{constituent.email}</td>
                <td className={styles.td}>{new Date(constituent.createdAt).toLocaleDateString('en-US')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )

}