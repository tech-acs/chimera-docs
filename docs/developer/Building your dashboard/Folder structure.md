---
sidebar_position: 1
---

# Folder structure

The first thing you need to do is familiarize yourself with the file and folder structure of the dashboard.

To begin with, please read the [Directory Structure](https://laravel.com/docs/structure) section of the Laravel documentation.

While there are various directories, that help organize your application, we shall mainly be concerned with a few of them.
These will be the directories where your generated dashboard files (such as indicators, etc.) will go into.

- <span className='text--danger text--light'>app/Http/Livewire</span> is the directory where all your indicator files will be stored. Under it, you can have them organized into various thematic or questionnaire based sub-directories.

- <span className='text--danger text--light'>app/IndicatorTemplates</span> is where your installed indicator templates will live. When you download indicator templates from our template library, they are stored somewhere in the storage directory and are copied here only when you use them for one of your indicators.

- <span className='text--danger text--light'>app/Mail</span> holds all the Mailable classes which you can modify to affect the emails sent by the dashboard. The corresponding mail templates are stored in <span className='text--danger text--light'>resources/views/mail</span>

- <span className='text--danger text--light'>app/Reports</span> is the directory where all your report class files will be stored. Under it, you can have them organized into various thematic or questionnaire based sub-directories. The actual (csv/excel) report outputs are stored under the <span className='text--danger text--light'>storage</span> directory.

- <span className='text--danger text--light'>app/View/Components/Home</span> is the directory where all your home page scorecard class files will be stored. Under it, you can have them organized into various thematic or questionnaire based sub-directories. All scorecards share the same template file and it is located in <span className='text--danger text--light'>resources/views/components/home</span>

- <span className='text--danger text--light'>config</span> is the directory that holds all the configuration files that control the various aspects of the dashboard. You rarely if ever need to directly modify these files. Rather, you should use the <span className='text--danger text--light'>.env</span> file located in the root directly to set various types of settings that are required by the dashboard.

- <span className='text--danger text--light'>resources/views</span> directory holds all blade templates of the dashboard application. Again, you rarely need to modify any of these files but it is good to familiarize yourself with its organization.