import React from 'react'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'

import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import LinkIcon from '@material-ui/icons/Link'
import DeleteIcon from '@material-ui/icons/Delete'
import EventIcon from '@material-ui/icons/Event'
import EventNoteIcon from '@material-ui/icons/EventNote'
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined'

import { Card, CardContent, Information, Name, Customer, InformationDate, DueDate, LegalDate, Documents, DocumentItem, DocumentIcon, DocumentName } from './styles'

export default (props) => {
    return (
      <Card key={props.key} data-card={`card-${props.status}`}>
        <CardContent>
          <Information>
            <Name>{props.name}</Name>
            <Customer><PersonOutlinedIcon/> {props.customer}</Customer>
            <InformationDate>
              <DueDate><EventIcon/> {props.due_date}</DueDate>
              <LegalDate><EventNoteIcon/> {props.legal_date}</LegalDate>
            </InformationDate>
          </Information>
          {
              props.documents.length > 0
              ?
              <Documents>
                {
                  props.documents.map((obj, index) => (
                    <DocumentItem>
                      <DocumentIcon><InsertDriveFileOutlinedIcon/></DocumentIcon>
                      <DocumentName>{obj.key}</DocumentName>
                      <IconButton className="link-icon" aria-label="link">
                        <LinkIcon />
                      </IconButton>
                      <IconButton className="delete-icon" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </DocumentItem>
                  ))
                }
              </Documents>
              : null
            }
        </CardContent>
      </Card>
    )
}