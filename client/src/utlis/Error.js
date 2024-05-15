import React from "react";
import { ValtionMe } from "./ValtionMe";

export const StyleInputError = "input __margin___ fontText errorborder"

export const StyleInput = "input __margin___ fontText"

export const Uppdaterats  = 'The information has been updated'
export const Errorserver =  'Try later'


export const somaText = 'The same name cannot be created'
export const lastworkingtext = 'Our last working'
export const services___ = 'Our Services'
export const Article = 'Our article'

export  const StylesP = '__margin___ margin_bootom_footer_'
// validation - The Correct Box
export const TheCorrectBox = (data, validationtext, Icons) => (ValtionMe(data, validationtext) ? <Icons className='stadbackgroundcolro iconfont transition  InputLeftRight cursor' /> : null)



//Error syntacs
export const ErrorStyle = (Show__) => (Show__ ? StyleInputError : StyleInput)



