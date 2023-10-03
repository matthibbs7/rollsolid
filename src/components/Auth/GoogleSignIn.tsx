import { UserProfile } from '@/types/user-profile';
import { Button } from '@chakra-ui/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/clientApp';

const GoogleSignIn:React.FC = () => {

    const [
        signInWithGoogle,
        user,
    ] = useSignInWithGoogle(auth);
    const [error, setError] = useState('');

    const createUserProfileDocument = async () => {
        try {
            const userEmail = user?.user.email;
            if (userEmail === null || userEmail === undefined) {
                setError('Invalid User Email');
                return;
            }

            const eventDocRef = doc(firestore, 'users', userEmail);
            const eventDoc = await getDoc(eventDocRef);
              
            // google profile already exists
            if (eventDoc.exists()) {
                return;
            }
    
            const newUserProfile: UserProfile = {
                userEmail: userEmail,
                userSettings: {notifications: true, widgetLock: false},
                userDashboards: [],
            };

            await setDoc(doc(firestore, 'users', userEmail), {...newUserProfile});
            router.push('/');
            return;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    useEffect(() => {
        if (user) {
            createUserProfileDocument();
        }
    }, [user]);

    return (
        <Button
            w="100%"
            h="48px"
            bg="none"
            border="1px solid #494D51"
            borderRadius="0px"
            _hover={{bg: '#1c1c1c'}}
            onClick={() => signInWithGoogle()}
        >
            Continue with Google&nbsp;&nbsp;→
        </Button>
    );
};
export default GoogleSignIn;