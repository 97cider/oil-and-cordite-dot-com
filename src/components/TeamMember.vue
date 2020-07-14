<template>
  <b-container class="team-member-info">
    <b-row no-gutters="true">
      <b-col sm="4" md="3" lg="3">
        <img class="team-icon" v-bind:src="'/public/images/' + teamMember.iconPath" />
      </b-col>
      <b-col sm="9" md="8" lg="9">
        <b-row>
          <b-col md="12">
            <div class="team-member-name">
              {{ teamMember.name }}
              <span v-if="teamMember.role" class="team-member-role">{{ teamMember.role }}</span>
              </div> 
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="team-member-description">{{ teamMember.description }}</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="team-member-links">
              <b-row no-gutters="true">
                <b-col md="1">
                  <span v-if="teamMember.personalWebLink" class="h1 mb-2">
                    <b-button variant="link">
                      <b-icon icon="award-fill" font-scale="2"/>
                    </b-button>
                  </span>
                </b-col>
                <b-col md="1">
                  <span v-if="teamMember.twitterAt" class="h1 mb-2">
                    <b-button variant="link">
                      <b-icon icon="at" font-scale="2"/>
                    </b-button>
                  </span>
                </b-col>
                <b-col md="1">
                  <span v-if="teamMember.personalWebLink" class="h1 mb-2">
                    <b-button variant="link">
                      <b-icon icon="link45deg" font-scale="2"/>
                    </b-button>
                  </span>
                </b-col>
                <b-col md="1">
                  <span v-if="teamMember.linkedInLink" class="h1 mb-2">
                    <b-button variant="link">
                      <b-icon icon="person-bounding-box" font-scale="2"/>
                    </b-button>
                  </span>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../scss/team-member.scss';

import { BIcon, BButton, BContainer, BRow, BCol } from 'bootstrap-vue';

export default {
  name: 'TeamMember',
  components: {
    BIcon,
    BButton,
    BContainer,
    BRow,
    BCol
  },
  props: {
    teamMember: {
      name: String,
      description: String,
      iconPath: String,
      websiteLink: String,
      twitterAt: String,
      personalWebLink: String,
      linkedInLink: String
    }
  }
}
</script>