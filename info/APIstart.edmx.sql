
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 07/10/2016 14:17:22
-- Generated from EDMX file: C:\Users\cbDev\Documents\Visual Studio 2015\Projects\AnnAPI\AnnAPI\APIstart.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [APIstart];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Html5Css3]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Html5Css3];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int  NOT NULL,
    [Name] nvarchar(20)  NOT NULL,
    [Email] nchar(30)  NOT NULL,
    [Password] nvarchar(150)  NOT NULL
);
GO

-- Creating table 'Html5Css3'
CREATE TABLE [dbo].[Html5Css3] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Category] nvarchar(50)  NOT NULL,
    [Information] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Html5Css3'
ALTER TABLE [dbo].[Html5Css3]
ADD CONSTRAINT [PK_Html5Css3]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------