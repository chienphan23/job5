import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminLayout } from './Layout/AdminLayout'
import { HomeLayout } from "./Layout/HomeLayout"
import { AdminMainContent } from './Admin/AdminComponent/AdminMainContent'

import { Login } from './System/Login/Login'
import { ForgotPassword } from './System/ForgotPassword/ForgotPassword'
import { Register } from './System/Register/Register'
import { Home } from './User/Home/Home'
// import { EditProfile } from './User/Profile/EditProfile'
// import { UserProfile } from './User/Profile/UserProfile'
import { JobLayout } from './Layout/JobLayout'
import { DetailJob } from './User/Job/DetailJob'
import { CreateJob } from './User/Job/CreateJob'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBugPage } from './System/Error/ErrorBugPage'
import { SearchResult } from './User/Home/SearchResult'
import { EmployerProfile } from './User/Employer/EmployerProfile'
import { EditProfileEmployer } from './User/Employer/EditProfileEmployer'
import { PageNotFound } from './UI/PageNotFound'
import { PageError } from './UI/PageError'
import { Toaster } from 'react-hot-toast'
import { EditJob } from './User/Job/EditJob'
import {RankUp} from "./User/Employer/Rank/RankUp"
import {RankUpSuccess} from "./User/Employer/Rank/RankUpSuccess"
import {RankUpFailed} from "./User/Employer/Rank/RankUpFailed"
import {AdminApproved} from "../src/Admin/AdminComponent/AdminApproved"
import { SearchPageHome } from './User/Home/SearchPageHome'
import { LayoutCommon } from './Layout/LayoutCommon'
import { ManageJob } from "./User/Employer/ManageJob";
import { EmployerLayout } from "./Layout/EmployerLayout";
import { ListApplierOfJob } from "./User/Application/ListApplierOfJob.";
import { CandidateLayout } from "./Layout/CandidateLayout";
import { EditCandidateProfile } from "./User/Candidate/EditCandidateProfile";
import { CandidateProfile } from "./User/Candidate/CandidateProfile";
import { JobSaved } from "./User/Candidate/JobSaved";
import { JobApplied } from "./User/Candidate/JobApplied";
import UpdateCv from "./User/Candidate/UpdateCv";
import { ManageCv } from "./User/Candidate/ManageCv";
import { CompanyFollow } from "./User/Candidate/CompanyFollow";
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter scrollToTop={true}>
        <Routes>
          <Route index element={<Navigate to="/login"/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route element={<AdminLayout/>}>
            <Route path='/admin' element={<AdminMainContent/>}/>
            <Route path='/admin/approveEmployer' element={<AdminApproved/>}/>
          </Route>
          <Route element={<LayoutCommon/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/search-page' element={<SearchPageHome/>}/>

          </Route>
          <Route element={<HomeLayout/>}>
            {/* <Route path='/editcandidateprofile/:id' element={<EditProfile/>}/>
            <Route path='/candidateprofile' element={<UserProfile/>}/> */}
            <Route path='/employer-profile/:id' element={<EmployerProfile/>}/>
            <Route path='/edit-employer-profile' element={<EditProfileEmployer/>}/>
            <Route path="/rank-up" element={<RankUp />} />
            <Route path="/rank-up/success" element={<RankUpSuccess />} />
            <Route path="/rank-up/failed" element={<RankUpFailed />} />
          </Route>

          <Route element={<JobLayout/>}> 
            <Route path='/job/:idJob' element={<DetailJob/>}/>
            <Route path='/createjob' element={<CreateJob/>}/>
            <Route path='/editjob/:idJob' element={<EditJob/>}/>
            <Route path='/home/:idSearch' element={<SearchResult/>}/>
          </Route>

          <Route element={<EmployerLayout />}>
                            <Route path="/manage-job" element={<ManageJob />} />
                            <Route
                                path="/list-applier/:idJob"
                                element={<ListApplierOfJob />}
                            />
                            <Route
                                path="/candidate-profile/:candidateId/:jobId"
                                element={<CandidateProfile />}
                            />
          </Route>

          <Route element={<CandidateLayout />}>
                            <Route
                                path="/edit-candidate-profile"
                                element={<EditCandidateProfile />}
                            />

                            <Route path="/job-saved" element={<JobSaved />} />

                            <Route
                                path="/job-applied"
                                element={<JobApplied />}
                            />

                            <Route path="/update-cv" element={<UpdateCv />} />

                            <Route
                                path="/update-cv/:id"
                                element={<UpdateCv />}
                            />

                            <Route path="/manage-cv" element={<ManageCv />} />

                            <Route
                                path="/company-follow"
                                element={<CompanyFollow />}
                            />
            </Route>

          <Route path='/errorbug' element={<ErrorBugPage/>}/>
          <Route path='/page-error' element={<PageError/>}/>
          <Route path='/page' element={<PageNotFound/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>



      </BrowserRouter>
      <Toaster position="top-center" gutter={12} containerStyle={{margin: "8px"}}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)"
          }
        }}
      />
      </QueryClientProvider>
    </>
  )
}

export default App
