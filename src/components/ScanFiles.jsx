import React, { useState, useEffect } from 'react';
import { uploadFile } from "../firebase/firebase-storage";
import Output from './output';

const ScanFiles = () => {

    const [firebaseUrl, setFirebaseUrl] = useState('');
    const [checkkaroUrl, setCheckkaroUrl] = useState('');
    const [userUrl, setUserUrl] = useState('');
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('');
    const [voteData, setVoteData] = useState(null);
    const [commentData , setCommentData] = useState(null)
    let value;


    const [activeTab, setActiveTab] = useState('file'); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    console.log(userUrl);
    let id;
    // let status;
    let md5;



    const file = new File([firebaseUrl], 'filename.pdf', { type: 'application/pdf' })

    const form = new FormData();

    form.append('file', file)

    const POST = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'x-apikey': 'YOUR VIRUSTOTAL API KEY'
        }
    };

    POST.body = form;



    const GET = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'x-apikey': 'YOUR VIRUSTOTAL API KEY'
        }
    };

    const POST_URL = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
            'x-apikey': 'YOUR VIRUSTOTAL API KEY'
        },
        body: new URLSearchParams({ url: userUrl })
    };


    useEffect(() => {
        fetch('https://www.virustotal.com/api/v3/files/upload_url', POST)
            .then(response => response.json())
            .then(response => {
                setCheckkaroUrl(response.data);
            })
            .catch(err => console.error(err));
    }, [firebaseUrl]);


    async function checkFile() {
        let raw = await fetch(checkkaroUrl, POST)
        let data = await raw.json()
        id = data.data.id
        console.log(id);
        getFileAnalysis()

    }


    async function getFileAnalysis() {
        let raw = await fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, GET)
        let data = await raw.json()
        md5 = data.meta.file_info.md5
        setStatus(data.data.attributes.status);
        if (status == "completed") {
            getVotes()
            getComments()
            setData(data);

        }
        setData(data);
        console.log(data);
    }

    async function getVotes() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/files/${md5}/votes?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    async function getComments() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/files/${md5}/comments?limit=10`, GET)
        let data = await raw.json()
        console.log(data);

    }

    async function checkUrl() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls`, POST_URL)
        let data = await raw.json();
        id = data.data.id;
        console.log(data);
        getUrlAnalysis()

    }

    async function getUrlAnalysis() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/analyses/${id}`, GET)
        let data = await raw.json()
        md5 = data.meta.url_info.id
        setStatus(data.data.attributes.status);
        if (status == "completed") {
            console.log(data);
            setData(data);

        }

        setData(data);
        getUrlComments()
        getUrlVotes()

    }

    async function getUrlComments() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls/${md5}/comments?limit=10`, GET)
        let data = await raw.json()
        setCommentData(data)
        console.log(data);

    }

    async function getUrlVotes() {

        let raw = await fetch(`https://www.virustotal.com/api/v3/urls/${md5}/votes?limit=10`, GET)
        let data = await raw.json()
        setVoteData(data)
        console.log(data);

    }

    const handleCheckFiles = async () => {
        try {
            // Create an input element to allow the user to select files
            const input = document.createElement('input');
            input.type = 'file';
            input.onchange = async (e) => {
                // Get the selected file
                const selectedFile = e.target.files[0];

                try {
                    // Upload the selected file

                    const uploadedUrl = await uploadFile(selectedFile);
                    setFirebaseUrl(uploadedUrl);
                    console.log('File upload completed successfully.');
                    console.log('Download URL:', uploadedUrl);
                } catch (error) {
                    console.error('Error uploading file:', error);
                }

                // After uploading, initiate the file check interval
                const checkInterval = () => {
                    checkFile()
                        .then(() => {
                            if (status !== "completed") {
                                setTimeout(checkInterval, 20000);
                            }
                        })
                        .catch(error => {
                            console.error("Error checking file:", error);
                        });
                };
                checkInterval();
            };

            // Customize input element if needed
            input.accept = '.pdf,.exe'; // Specify accepted file types
            input.multiple = false; // Allow only single file selection, remove this line to allow multiple files
            input.style.display = 'none'; // Hide the input element

            // Append input element to the document body
            document.body.appendChild(input);

            // Trigger a click event on the input element to open the file picker dialog
            input.click();

            // Remove the input element from the DOM after the file is selected
            input.remove();
        } catch (error) {
            console.error('Error handling file selection:', error);
        }
    };

    const handleCheckUrls = () => {

        const checkInterval = () => {
            if (status !== "completed") {
                checkUrl()
                    .then(() => {
                        if (status !== "completed") {
                            setTimeout(checkInterval, 15000);
                        }
                    })
                    .catch(error => {
                        console.error("Error checking URL:", error);
                    });
            }
        };
        checkInterval();

    }

    const handleInput = (e) => {
        setUserUrl(e.target.value)
        console.log(e);

    }

    if (status === "completed" && data) {
        return (
            <div className="scan-files">

                {/* Display your data here */
                    <Output data={data} voteData={voteData} commentData={commentData} />

                }

            </div>
        );

    }

    else {
        return (



            <div className="scan-files">
                <div className="tabs">
                    <button className={activeTab === 'file' ? 'active' : ''} onClick={() => handleTabChange('file')}>File</button>
                    <button className={activeTab === 'url' ? 'active' : ''} onClick={() => handleTabChange('url')}>URL</button>
                </div>
                <div className="tab-content">
                    {activeTab === 'file' && (
                        // Content for the "File" tab
                        <div className="file-tab-content">
                            <img className="w-14 h-14 mr-2" src="antivirus.gif" alt="" />
                            <button className="mr-28 btn rounded-md p-2 m-2 border border-blue-400" onClick={handleCheckFiles}>Check Files</button>
                        </div>
                    )}
                    {activeTab === 'url' && (
                        // Content for the "URL" tab
                        <div className="url-tab-content">
                            <div className='flex justify-center'>
                                <input className='w-96 px-2 py-1 rounded-sm border border-gray-400' type='search' value={value} onChange={handleInput}></input>
                            </div>
                            <img className="mt-2 ml-2 w-10 h-10" src="hacker.png" alt="" />
                            <button className="btn rounded-md p-2 m-2 border border-blue-400" onClick={handleCheckUrls}>Check URLs</button>
                        </div>
                    )}
                </div>
            </div>
        )

    }

}

export default ScanFiles