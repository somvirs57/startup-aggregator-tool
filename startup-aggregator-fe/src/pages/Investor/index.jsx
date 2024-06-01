import { SideMenu } from '../../components/helper'

export default function Investor() {
  const breadCrumb =[
    {title:'Investor'}
  ]
  return (
    <SideMenu breadCrumb={breadCrumb}>
        <h1 className='text-3xl'>Investor</h1>
    </SideMenu>
  )
}
