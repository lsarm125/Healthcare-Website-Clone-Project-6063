import { createClient } from '@supabase/supabase-js'

// These values need to be replaced with your actual Supabase project credentials
const SUPABASE_URL = 'https://your-project-id.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

if(SUPABASE_URL === 'https://your-project-id.supabase.co' || SUPABASE_ANON_KEY === 'your-anon-key'){
  console.warn('Missing Supabase credentials. Job board functionality will not work until credentials are added.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { 
    persistSession: true,
    autoRefreshToken: true 
  }
})

// Job Board API
export const jobBoardApi = {
  // Get all job listings
  async getJobs() {
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
    return data || [];
  },
  
  // Get job by ID
  async getJobById(id) {
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching job:', error);
      return null;
    }
    return data;
  },
  
  // Create a new job listing
  async createJob(jobData) {
    const { data, error } = await supabase
      .from('job_listings')
      .insert([jobData])
      .select();
    
    if (error) {
      console.error('Error creating job:', error);
      return null;
    }
    return data?.[0];
  },
  
  // Update a job listing
  async updateJob(id, jobData) {
    const { data, error } = await supabase
      .from('job_listings')
      .update(jobData)
      .eq('id', id)
      .select();
    
    if (error) {
      console.error('Error updating job:', error);
      return null;
    }
    return data?.[0];
  },
  
  // Delete a job listing
  async deleteJob(id) {
    const { error } = await supabase
      .from('job_listings')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting job:', error);
      return false;
    }
    return true;
  },
  
  // Search jobs by title, location, or type
  async searchJobs(query) {
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .or(`title.ilike.%${query}%,location.ilike.%${query}%,job_type.ilike.%${query}%`);
    
    if (error) {
      console.error('Error searching jobs:', error);
      return [];
    }
    return data || [];
  },
  
  // Filter jobs by specialty
  async filterBySpecialty(specialty) {
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .eq('specialty', specialty);
    
    if (error) {
      console.error('Error filtering jobs:', error);
      return [];
    }
    return data || [];
  }
};

// Website Content API - for updating copywriting and other content
export const contentApi = {
  // Get all website content
  async getContent() {
    const { data, error } = await supabase
      .from('website_content')
      .select('*');
    
    if (error) {
      console.error('Error fetching content:', error);
      return {};
    }
    
    // Convert array to object with section keys for easier access
    const contentObj = {};
    if (data) {
      data.forEach(item => {
        contentObj[item.section] = item;
      });
    }
    return contentObj;
  },
  
  // Get content for a specific section
  async getContentBySection(section) {
    const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .eq('section', section)
      .single();
    
    if (error) {
      console.error(`Error fetching ${section} content:`, error);
      return null;
    }
    return data;
  },
  
  // Update content for a specific section
  async updateContent(section, contentData) {
    const { data, error } = await supabase
      .from('website_content')
      .update(contentData)
      .eq('section', section)
      .select();
    
    if (error) {
      console.error(`Error updating ${section} content:`, error);
      return null;
    }
    return data?.[0];
  }
};

// User applications API
export const applicationsApi = {
  // Submit a job application
  async submitApplication(applicationData) {
    const { data, error } = await supabase
      .from('applications')
      .insert([applicationData])
      .select();
    
    if (error) {
      console.error('Error submitting application:', error);
      return null;
    }
    return data?.[0];
  },
  
  // Get all applications (admin only)
  async getApplications() {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching applications:', error);
      return [];
    }
    return data || [];
  },
  
  // Update application status
  async updateApplicationStatus(id, status) {
    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id)
      .select();
    
    if (error) {
      console.error('Error updating application status:', error);
      return null;
    }
    return data?.[0];
  }
};

export default supabase;