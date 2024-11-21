import { generate } from "otp-generator"
import {logger} from "./src/utils/logger.js"

export const otp=generate(10,{upperCaseAlphabets:true,specialChars:false,lowerCaseAlphabets:true})
