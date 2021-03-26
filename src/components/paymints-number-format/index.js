import React from 'react';
import trim from 'lodash/trim';

export default function FavorAppsNumberFormat({ locale = 'en-US', currency = 'USD', format, decimals, number, ...props }) {
    // locale -> BCP 47 language tag
    // currency -> Currency code in ISO 4217
    /* format: PropTypes.oneOf([
        'decimal',
        'currency',
        'percent',
    ]),*/

    const formatter = new Intl.NumberFormat(locale, {
        style: format,
        currency: trim(currency) || 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <span {...props}>
            {formatter.format(number || 0)}
        </span>
    );
}
