import { _mock } from "src/_mock";

export const linkedRequest = [
    {
        title: 'Woolworths',
        rating: '5',
        organizationRegistrationNumber: '78925486458',
        membershipNumber: '354624',
        contactno: '+61-455-513-290',
        email: 'john.doe@gmail.com',
        imageURL: 'woolworths',
        type: 'linked',
        btnText: 'Unlink',
        btnIcon: 'unlink',
        id: _mock.id(0)
    },
    {
        title: 'Telstra',
        rating: '5',
        organizationRegistrationNumber: '78925486458',
        membershipNumber: '354624',
        contactno: '+61-455-513-290',
        email: 'john.doe@gmail.com',
        type: 'linked',
        imageURL: 'telstra',
        btnIcon: 'unlink',
        btnText: 'Unlink',
        id: _mock.id(1)
    },
]
export const pendingRequest = [
    {
        title: 'Westpac',
        rating: '5',
        organizationRegistrationNumber: '78925486458',
        membershipNumber: '354624',
        contactno: '+61-455-513-290',
        type: 'pending',
        email: 'john.doe@gmail.com',
        imageURL: 'westpac',
        btnText: 'Accept',
        btnIcon: 'unlink',
        secondarybtnText: 'Ignore',
        id: _mock.id(0)
    },
    {
        title: 'Paris Creek',
        rating: '5',
        organizationRegistrationNumber: '78925486458',
        membershipNumber: '354624',
        contactno: '+61-455-513-290',
        type: 'pending',
        email: 'john.doe@gmail.com',
        imageURL: 'parisCreek',
        btnIcon: 'unlink',
        btnText: 'Accept',
        secondarybtnText: 'Ignore',
        id: _mock.id(1)
    },
]