
import Header from '@/components/Header'
import Room from '@/components/Room'
import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading';
import { useRouter } from 'next/router'


// Waku imports
import { ContentPairProvider, useWaku } from "@waku/react";

// Misc imports
import ShortUniqueId from 'short-unique-id';

export default function Game() {
    const { isLoading } = useWaku();
    const router = useRouter();
    const room = router.query.id;

    if (true) {
        return <Loading />
    }

    return (
        <>
            <ContentPairProvider
                contentTopic={"/tictactoe/" + room}
            >
                <div className='bg-black h-screen'>
                    <Header />
                    <Room room={room} />
                </div>
            </ContentPairProvider>
        </>
    )
}
