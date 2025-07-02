"use client";
import { codeToHtml } from 'shiki'
import React, { useEffect, useState } from 'react'
import integrationCodes from '../_lib/integration-codes';
import { CopyIcon } from 'lucide-react';
import CopyButton from './buttons/copy-button';

const IntegrationCodePreview = () => {

    const [code, setCode] = useState('')

    const [language, setLanguage] = useState('javascript')

    useEffect(() => {

        const codeForLang = integrationCodes[language ?? 'javascript']

        codeToHtml(codeForLang, {
            lang: language,
            theme: 'nord'
        }).then(html => setCode(html))

    }, [language])

    return (
        <div className='w-full md:w-[800px] mt-[16px] rounded-[8px] overflow-hidden relative'>
            <CopyButton
                text={integrationCodes[language ?? 'javascript']}
                successText="Code Copied"
                errorText="Couldn't copy code"
                className='absolute top-2 right-2 bg-background text-foreground rounded p-[8px] w-max h-max'
            >
                <CopyIcon />
            </CopyButton>
            <div dangerouslySetInnerHTML={{ __html: code }}></div>
        </div>
    )
}

export default IntegrationCodePreview