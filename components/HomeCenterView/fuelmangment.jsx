import React from 'react'
import fm from "../../Asstes/style/fuel_mangment.module.css"

const Fuelmangment = () => {
  return (
<>
<div className={fm.main_container}>
	<div className={fm.header_wraper}>Fuel Mangement</div>
	<div className={fm.form_container}>
		<div className={fm.form_ele_box}>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Date" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Previous stock" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Today starting stock" />
			</div>

		</div>
		<div className={fm.form_ele_box}>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Total stock" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Daily sale in litter" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Final stock" />
			</div>

		</div>
		<div className={fm.form_ele_box}>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Total sale in (Taka)" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Mitar reading start" />
			</div>
			<div className={fm.form_ele}>
				<input className={fm.io_ele} placeholder="Mitar reading close" />
			</div>

		</div>
		<div className={fm.form_ele_box}>
			<div className={fm.form_textarea}>
				<textarea className={fm.io_ele} placeholder="Type your message!" />
			</div>
		
		</div>
		<div className={fm.save_btn}>Submit</div>
	</div>
</div>

</>
  )
}

export default Fuelmangment