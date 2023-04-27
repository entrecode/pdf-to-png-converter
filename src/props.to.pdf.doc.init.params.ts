import * as pdfApiTypes from 'pdfjs-dist/types/src/display/api';
import { PDF_TO_PNG_OPTIONS_DEFAULTS } from './const';
import { PdfToPngOptions } from './types/pdf.to.png.options';
import { VerbosityLevel } from './types/verbosity.level';

export function propsToPdfDocInitParams(props?: PdfToPngOptions): pdfApiTypes.DocumentInitParameters {
    const cMapUrl = '../node_modules/pdfjs-dist/cmaps/';
    const cMapPacked = true;
    const standardFontDataUrl = '../node_modules/pdfjs-dist/standard_fonts/';
    const pdfDocInitParams: pdfApiTypes.DocumentInitParameters = {
        cMapUrl,
        cMapPacked,
        standardFontDataUrl,
    };

    pdfDocInitParams.verbosity = props?.verbosityLevel !== undefined ? props?.verbosityLevel : VerbosityLevel.ERRORS;

    pdfDocInitParams.disableFontFace =
        props?.disableFontFace !== undefined ? props.disableFontFace : PDF_TO_PNG_OPTIONS_DEFAULTS.disableFontFace;

    pdfDocInitParams.useSystemFonts =
        props?.useSystemFonts !== undefined ? props.useSystemFonts : PDF_TO_PNG_OPTIONS_DEFAULTS.useSystemFonts;

    pdfDocInitParams.enableXfa =
        props?.enableXfa !== undefined ? props.enableXfa : PDF_TO_PNG_OPTIONS_DEFAULTS.enableXfa;

    pdfDocInitParams.password =
        props?.pdfFilePassword !== undefined ? props?.pdfFilePassword : PDF_TO_PNG_OPTIONS_DEFAULTS.pdfFilePassword;

    // https://github.com/mozilla/pdf.js/issues/4244#issuecomment-1232548915
    pdfDocInitParams.standardFontDataUrl = './node_modules/pdfjs-dist/standard_fonts/';
    
    return pdfDocInitParams;
}
