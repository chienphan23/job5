USE [Job5_v2]
GO
INSERT [dbo].[provinces] ([provincename]) VALUES (N'An Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bà Rịa - Vũng Tàu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Kạn')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bạc Liêu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bắc Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bến Tre')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Định')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Dương')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Phước')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Bình Thuận')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cà Mau')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cần Thơ')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Cao Bằng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đà Nẵng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đắk Lắk')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đắk Nông')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Điện Biên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đồng Nai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Đồng Tháp')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Gia Lai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Nam')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Nội')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hà Tĩnh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hải Dương')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hải Phòng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hậu Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hòa Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Hưng Yên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Khánh Hòa')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Kiên Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Kon Tum')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lai Châu')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lâm Đồng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lạng Sơn')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Lào Cai')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Long An')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Nam Định')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Nghệ An')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Ninh Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Ninh Thuận')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Phú Thọ')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Phú Yên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Nam')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Ngãi')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Quảng Trị')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Sóc Trăng')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Sơn La')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tây Ninh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thái Bình')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thái Nguyên')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thanh Hóa')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thành phố Hồ Chí Minh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Thừa Thiên Huế')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tiền Giang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Trà Vinh')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Tuyên Quang')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Vĩnh Long')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Vĩnh Phúc')
INSERT [dbo].[provinces] ([provincename]) VALUES (N'Yên Bái')




GO
SET IDENTITY_INSERT [dbo].[ranks] ON
 
INSERT [dbo].[ranks] ([displaytime], [limitpost], [numapplications], [price], [reuptimes], [rankid], [description], [rankname], [photo]) VALUES (7, 1, 10, 0, 0, 1, N'Thành viên', N'Thành viên', N'thanhvien.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [numapplications], [price], [reuptimes], [rankid], [description], [rankname], [photo]) VALUES (14, 2, 20, 1000000, 1, 2, N'Bạc', N'Bạc', N'bac.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [numapplications], [price], [reuptimes], [rankid], [description], [rankname], [photo]) VALUES (21, 3, 30, 2000000, 2, 3, N'Vàng', N'Vàng', N'vang.png')
INSERT [dbo].[ranks] ([displaytime], [limitpost], [numapplications], [price], [reuptimes], [rankid], [description], [rankname], [photo]) VALUES (30, 4, 40, 3000000, 3, 4, N'Kim cương', N'Kim cương', N'kimcuong.png')
SET IDENTITY_INSERT [dbo].[ranks] OFF


GO
INSERT [dbo].[employers] ([reviewscore], [employerid], [rankid], [address], [background], [description], [email], [employername], [phone], [photo], [provincename]) VALUES (0, 1, 1, N'Huế', NULL, NULL, N'a@a', N'FPT soft', N'0123', NULL, N'Đà Nẵng')
GO
SET IDENTITY_INSERT [dbo].[jobtypes] ON 

INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (1, N'Parttime')
INSERT [dbo].[jobtypes] ([typeid], [type]) VALUES (2, N'Fulltime')
SET IDENTITY_INSERT [dbo].[jobtypes] OFF
GO
SET IDENTITY_INSERT [dbo].[jobs] ON 

INSERT [dbo].[jobs] ([isexpired], [isremoved], [numposition], [typeid], [yearexperience], [acceptdate], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [jobname], [jobposition], [location]) VALUES (0, 0, 5, 1, 1, CAST(N'2024-04-22T00:00:00.0000000' AS DateTime2), 1, CAST(N'2024-04-29T00:00:00.0000000' AS DateTime2), 1, 100, 50, CAST(N'2024-04-20T00:00:00.0000000' AS DateTime2), N'Dev', N'fpt', N'Thừa Thiên Huế')
INSERT [dbo].[jobs] ([isexpired], [isremoved], [numposition], [typeid], [yearexperience], [acceptdate], [employerid], [expirationdate], [jobid], [maxsalary], [minsalary], [postdate], [jobname], [jobposition], [location]) VALUES (0, 0, 6, 1, 2, CAST(N'2024-04-22T00:00:00.0000000' AS DateTime2), 1, CAST(N'2024-04-29T00:00:00.0000000' AS DateTime2), 2, 70, 30, CAST(N'2024-04-20T00:00:00.0000000' AS DateTime2), N'Tester', N'fpt', N'Đà Nẵng')
SET IDENTITY_INSERT [dbo].[jobs] OFF
/*GO
SET IDENTITY_INSERT [dbo].[cvs] ON 

INSERT [dbo].[cvs] ([maincv], [candidateid], [cvid], [cvfile], [cvname], [description]) VALUES (1, 2, 1, NULL, N'CV 1', N'Không')
INSERT [dbo].[cvs] ([maincv], [candidateid], [cvid], [cvfile], [cvname], [description]) VALUES (0, 2, 2, NULL, N'CV2', N'Không')
SET IDENTITY_INSERT [dbo].[cvs] OFF
GO
SET IDENTITY_INSERT [dbo].[follows] ON 

INSERT [dbo].[follows] ([candidateid], [employerid], [followdate], [followid]) VALUES (2, 1, CAST(N'2024-04-22T00:00:00.0000000' AS DateTime2), 1)
SET IDENTITY_INSERT [dbo].[follows] OFF
GO
SET IDENTITY_INSERT [dbo].[jobinterests] ON 

INSERT [dbo].[jobinterests] ([candidateid], [interestdate], [jobid], [jobinterestid]) VALUES (2, CAST(N'2024-04-22T00:00:00.0000000' AS DateTime2), 1, 3)
SET IDENTITY_INSERT [dbo].[jobinterests] OFF
GO
SET IDENTITY_INSERT [dbo].[timelines] ON 

INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (2, 1, N'Dev', N'2019-2022')
INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (2, 2, N'Data Analyst', N'2022-2023')
INSERT [dbo].[timelines] ([candidateid], [timelineid], [job], [stage]) VALUES (2, 3, N'Project Manager', N'2023-2024')
SET IDENTITY_INSERT [dbo].[timelines] OFF*/
GO
SET IDENTITY_INSERT [dbo].[industries] ON 

INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (1, N'Cônng nghệ thông tin')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (2, N'Ngân hàng')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (3, N'Thương mại điện tử')
INSERT [dbo].[industries] ([industryid], [industryname]) VALUES (4, N'Bưu chính viễn thông')
SET IDENTITY_INSERT [dbo].[industries] OFF
GO
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 1)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (1, 2)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (2, 1)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (2, 2)
INSERT [dbo].[jobs_industries] ([industries_industryid], [job_jobid]) VALUES (3, 2)
GO
SET IDENTITY_INSERT [dbo].[jobbenefits] ON 

INSERT [dbo].[jobbenefits] ([benefitid], [jobid], [description]) VALUES (1, 1, N'Không')
SET IDENTITY_INSERT [dbo].[jobbenefits] OFF
GO
SET IDENTITY_INSERT [dbo].[jobdescriptions] ON 

INSERT [dbo].[jobdescriptions] ([descriptionid], [jobid], [description]) VALUES (1, 1, N'Không')
SET IDENTITY_INSERT [dbo].[jobdescriptions] OFF
GO
SET IDENTITY_INSERT [dbo].[jobrequirements] ON 

INSERT [dbo].[jobrequirements] ([jobid], [requirementid], [description]) VALUES (1, 1, N'Không')
SET IDENTITY_INSERT [dbo].[jobrequirements] OFF
GO

SET IDENTITY_INSERT [dbo].[applicationstatus] ON
 
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (1, N'Vừa ứng tuyển')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (2, N'Đã duyệt')
INSERT [dbo].[applicationstatus] ([status], [description]) VALUES (3, N'Từ chối')
SET IDENTITY_INSERT [dbo].[applicationstatus] OFF
GO



create TRIGGER InsertUserRoleTrigger
ON users
AFTER INSERT
AS
BEGIN
    DECLARE @userid INT, @role nvarchar(50);
    -- Lấy userid và role từ bản ghi vừa được chèn vào bảng users
    SELECT @userid = userid, @role = role
    FROM inserted;
    -- Kiểm tra nếu role là 1 (employer)
    IF @role = 'employer'
    BEGIN
        INSERT INTO employers (employerid, [rankid], reviewscore, background, photo, approved)
        VALUES (@userid, 1, 0, 'nophoto.png', 'nobackground.png', 0);
    END
    -- Kiểm tra nếu role là 2 (candidate)
    ELSE IF @role = 'candidate'
    BEGIN
        INSERT INTO candidates (candidateid, yearexperience, photo)
        VALUES (@userid, 0, 'nophoto.png');
    END
END;

GO
/*
create PROCEDURE GetJobsByEmployer @numJobsToShow INT
AS
BEGIN
WITH TempTable AS (
				SELECT TOP (CASE WHEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) > 0 THEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) ELSE 0 END) employerId, employername, rankid
                FROM employers e
                WHERE rankid = 3 AND EXISTS(SELECT j.jobid FROM jobs j WHERE j.employerid = e.employerid)   
                UNION ALL
                SELECT TOP (CASE WHEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) - (SELECT COUNT(*) FROM employers WHERE rankId = 3) > 0 THEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) - (SELECT COUNT(*) FROM employers WHERE rankId = 3) ELSE 0 END) employerId, employername, rankid
                FROM employers e
                WHERE rankid = 2 AND EXISTS(SELECT j.jobid FROM jobs j WHERE j.employerid = e.employerid)
				UNION ALL
				SELECT TOP (CASE WHEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) - (SELECT COUNT(*) FROM employers WHERE rankId = 3) - (SELECT COUNT(*) FROM employers WHERE rankId = 2) > 0 THEN @numJobsToShow - (SELECT COUNT(*) FROM employers WHERE rankId = 4) - (SELECT COUNT(*) FROM employers WHERE rankId = 3) - (SELECT COUNT(*) FROM employers WHERE rankId = 2) ELSE 0 END) employerId, employername, rankid
                FROM employers e
                WHERE rankid = 1 AND EXISTS(SELECT j.jobid FROM jobs j WHERE j.employerid = e.employerid)
				UNION ALL
				SELECT employerid, employername, rankid from employers e where rankid = 4 AND EXISTS(SELECT j.jobid FROM jobs j WHERE j.employerid = e.employerid) ),

RankedJobs AS (
					SELECT TOP(@numJobsToShow) j.*, ROW_NUMBER() OVER(PARTITION BY j.employerid ORDER BY j.jobid) AS RowNum
					FROM jobs j
					WHERE j.employerid IN (SELECT employerId FROM TempTable)
				)
SELECT * FROM RankedJobs WHERE RowNum = 1;
END;*/


