import React from 'react'

export default function Loading() {
    return (
        <div className='h-screen bg-black flex text-white items-center w-full justify-center'>
<svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="12" r="0" fill="currentColor">
        <animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/>
    </circle>
    <circle cx="12" cy="12" r="0" fill="currentColor">
        <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/>
    </circle>
    <circle cx="6" cy="12" r="0" fill="currentColor">
        <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/>
    </circle>
</svg>
            
        </div>
    )
}
