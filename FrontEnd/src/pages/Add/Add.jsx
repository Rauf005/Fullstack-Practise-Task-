import React from 'react';
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import style from "./style.module.css";
import {Helmet} from "react-helmet";

function Add() {

  const formik = useFormik({
    initialValues: {
      countryName: '',
      description: "",
      about: "",
      image: "", 
    },
    validationSchema: Yup.object({
      countryName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .min(3, 'Must be 3 characters more')
        .required('Required'),
      description: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .min(10, 'Must be 10 characters more')
        .required('Required'),
      about: Yup.string()
        .max(100, 'Year must be less than 100')
        .min(10, 'Year must be greater than 10')
        .required('Required'),
      image: Yup.string()
        .required('Required'), 
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/country", values);
        console.log("Product added successfully:", response.data);
        formik.resetForm(); 
      } catch (error) {
        console.error("Error adding product:", error);
      }
    },
  });

  return (
    
    <div style={{ width: "100%", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Helmet>
                <title>Add</title>
            </Helmet>
      <form id={style.addform} onSubmit={formik.handleSubmit}>
        <label htmlFor="countryName">Country Name </label>
        <input
          id="countryName"
          name="countryName"
          type="text" 
          onChange={formik.handleChange}
          checked={formik.values.countryName} 
        />
        {formik.touched.countryName && formik.errors.countryName ? (
          <div style={{ color: "red" }}>{formik.errors.countryName}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div style={{ color: "red" }}>{formik.errors.description}</div>
        ) : null}

        <label htmlFor="about">About</label>
        <input
          id="about"
          name="about"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.about}
        />
        {formik.touched.about && formik.errors.about ? (
          <div style={{ color: "red" }}>{formik.errors.about}</div>
        ) : null}

        <label htmlFor="image">Image </label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;